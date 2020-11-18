import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "website",
  outDir: './docs',
  routes: {
    "/bake/:title": {
      type: 'contentFolder',
      title: {
        folder: "./bake"
      }
    },
  //   '/blog/:slug': {
  //     type: 'contentFolder',
  //     slug: {
  //       folder: "./blog"
  //     }
  //   },
    "/blog/:postId": {
      type: 'contentFolder',
      postId: {
        folder: "./blog"
      }
    },
  }
};