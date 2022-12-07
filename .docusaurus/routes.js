import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '7ad'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '39c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'a98'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'c80'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'd6d'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'fdb'),
    exact: true
  },
  {
    path: '/blog/tags/community',
    component: ComponentCreator('/blog/tags/community', '3a0'),
    exact: true
  },
  {
    path: '/blog/tags/documentation',
    component: ComponentCreator('/blog/tags/documentation', '3d4'),
    exact: true
  },
  {
    path: '/blog/tags/guide',
    component: ComponentCreator('/blog/tags/guide', '620'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '3b0'),
    exact: true
  },
  {
    path: '/blog/tags/howto',
    component: ComponentCreator('/blog/tags/howto', '252'),
    exact: true
  },
  {
    path: '/blog/tags/scs',
    component: ComponentCreator('/blog/tags/scs', '284'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '72d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'e7f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'dda'),
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
    component: ComponentCreator('/', '7f7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
