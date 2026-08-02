// Projects the GitHub-readable `docs/` tree into the Starlight content collection at
// `src/content/docs/`. Runs before dev and build; the output is generated and gitignored.
//
// `docs/` is authored to read well on GitHub, so pages link to each other with relative
// Markdown paths. Starlight serves each page as a directory with a trailing slash, where
// those paths no longer resolve, so links are rewritten to root-absolute URLs under the
// site's base. Keeping this a projection rather than a one-time move is what lets the repo
// stay browsable on GitHub.

import { readdir, readFile, writeFile, mkdir, rm, copyFile } from 'node:fs/promises'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = join(root, 'docs')
const outDir = join(root, 'src', 'content', 'docs')
const base = '/docs'

const LINK = /(?<=\]\()(\.{1,2}\/[^)\s#]+?\.md)(#[^)\s]*)?(?=\))/g
// Frontmatter, then the body's opening H1. On GitHub the frontmatter renders as a table, so
// that H1 is the page's visible title and has to stay. Starlight renders the frontmatter
// title as the H1 itself, so leaving it would print the title twice.
const LEAD_H1 = /^(---\r?\n[\s\S]*?\r?\n---\r?\n)\s*#[ \t]+(.+?)[ \t]*\r?\n+/

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(full)))
    else out.push(full)
  }
  return out
}

function rewriteTarget(fileDir, target, anchor) {
  const parts = fileDir ? fileDir.split('/').filter(Boolean) : []
  for (const segment of target.split('/')) {
    if (segment === '' || segment === '.') continue
    if (segment === '..') parts.pop()
    else parts.push(segment)
  }
  const last = parts[parts.length - 1].replace(/\.md$/, '')
  if (last === 'README' || last === 'index') parts.pop()
  else parts[parts.length - 1] = last
  const path = parts.join('/')
  return `${base}/${path ? `${path}/` : ''}${anchor ?? ''}`
}

const files = await walk(srcDir)
await rm(outDir, { recursive: true, force: true })

let rewritten = 0
let h1s = 0
for (const file of files) {
  const rel = relative(srcDir, file).split('\\').join('/')
  const outRel = rel.replace(/(^|\/)README\.md$/, '$1index.md')
  const dest = join(outDir, outRel)
  await mkdir(dirname(dest), { recursive: true })

  if (!file.endsWith('.md')) {
    await copyFile(file, dest)
    continue
  }

  const fileDir = outRel.includes('/') ? outRel.slice(0, outRel.lastIndexOf('/')) : ''
  const text = await readFile(file, 'utf8')

  const stripped = text.replace(LEAD_H1, (match, frontmatter, heading) => {
    const title = /^title:\s*(.*?)\s*$/m.exec(frontmatter)?.[1] ?? ''
    const bare = title.replace(/^["'](.*)["']$/, '$1')
    if (bare && bare !== heading) {
      console.warn(`  ${rel}: heading "${heading}" does not match title "${bare}"`)
      return match
    }
    h1s++
    return frontmatter
  })

  await writeFile(
    dest,
    stripped.replace(LINK, (_m, target, anchor) => {
      rewritten++
      return rewriteTarget(fileDir, target, anchor)
    }),
  )
}

console.log(
  `content: ${files.length} files projected, ${rewritten} links rewritten, ${h1s} duplicate H1s removed`,
)
