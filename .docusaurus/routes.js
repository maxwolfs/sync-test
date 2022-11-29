import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4b5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b80'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '376'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '011'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ebd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '3c2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'c16'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ebb'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'bbf'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '786'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9c3'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '015'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '627'),
    exact: true
  },
  {
    path: '/blog/tags/community',
    component: ComponentCreator('/blog/tags/community', 'a48'),
    exact: true
  },
  {
    path: '/blog/tags/documentation',
    component: ComponentCreator('/blog/tags/documentation', '1be'),
    exact: true
  },
  {
    path: '/blog/tags/guide',
    component: ComponentCreator('/blog/tags/guide', '3a4'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'b9c'),
    exact: true
  },
  {
    path: '/blog/tags/howto',
    component: ComponentCreator('/blog/tags/howto', 'd57'),
    exact: true
  },
  {
    path: '/blog/tags/scs',
    component: ComponentCreator('/blog/tags/scs', '3a8'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '2d4'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '5f6'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fd1'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '81d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
