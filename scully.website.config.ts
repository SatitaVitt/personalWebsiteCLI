import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "website",
  outDir: './docs/static',
  routes: {
  //   '/blog/:slug': {
  //     type: 'contentFolder',
  //     slug: {
  //       folder: "./blog"
  //     }
  //   },
    '/blog/:postId': {
      type: 'contentFolder',
      postId: {
        folder: "./blog"
      }
    },
  }
};