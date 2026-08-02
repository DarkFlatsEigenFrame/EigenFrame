// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://eigenframe.darkflats.com',
  base: '/docs',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'EigenFrame',
      description:
        'How to use EigenFrame, the local astrophotography preprocessing app for monochrome XISF and FITS libraries.',
      sidebar: [
        // The site title links to the guide's own home, so without this there is no way back to
        // the product site for anyone who arrived from it.
        { label: 'eigenframe.darkflats.com', link: 'https://eigenframe.darkflats.com/' },
        { label: 'Get started', autogenerate: { directory: 'start' } },
        { label: 'Your library', autogenerate: { directory: 'library' } },
        { label: 'Inspect and cull', autogenerate: { directory: 'inspect' } },
        { label: 'Calibration', autogenerate: { directory: 'calibration' } },
        { label: 'Register and stack', autogenerate: { directory: 'stack' } },
        { label: 'Reference', autogenerate: { directory: 'reference' } },
        { label: 'Help', autogenerate: { directory: 'help' } },
      ],
    }),
  ],
});
