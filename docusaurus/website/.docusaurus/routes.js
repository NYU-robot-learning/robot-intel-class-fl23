
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/robot-intel-class-fl23/assignments',
    component: ComponentCreator('/robot-intel-class-fl23/assignments','750'),
    exact: true
  },
  {
    path: '/robot-intel-class-fl23/blog',
    component: ComponentCreator('/robot-intel-class-fl23/blog','a65'),
    exact: true
  },
  {
    path: '/robot-intel-class-fl23/blog/archive',
    component: ComponentCreator('/robot-intel-class-fl23/blog/archive','0b9'),
    exact: true
  },
  {
    path: '/robot-intel-class-fl23/blog/first-assignment',
    component: ComponentCreator('/robot-intel-class-fl23/blog/first-assignment','813'),
    exact: true
  },
  {
    path: '/robot-intel-class-fl23/blog/tags',
    component: ComponentCreator('/robot-intel-class-fl23/blog/tags','0aa'),
    exact: true
  },
  {
    path: '/robot-intel-class-fl23/blog/tags/review',
    component: ComponentCreator('/robot-intel-class-fl23/blog/tags/review','8cd'),
    exact: true
  },
  {
    path: '/robot-intel-class-fl23/blog/tags/robotics',
    component: ComponentCreator('/robot-intel-class-fl23/blog/tags/robotics','470'),
    exact: true
  },
  {
    path: '/robot-intel-class-fl23/logistics',
    component: ComponentCreator('/robot-intel-class-fl23/logistics','131'),
    exact: true
  },
  {
    path: '/robot-intel-class-fl23/logistics-page',
    component: ComponentCreator('/robot-intel-class-fl23/logistics-page','905'),
    exact: true
  },
  {
    path: '/robot-intel-class-fl23/markdown-page',
    component: ComponentCreator('/robot-intel-class-fl23/markdown-page','312'),
    exact: true
  },
  {
    path: '/robot-intel-class-fl23/syllabus',
    component: ComponentCreator('/robot-intel-class-fl23/syllabus','326'),
    exact: true
  },
  {
    path: '/robot-intel-class-fl23/syllabus-page',
    component: ComponentCreator('/robot-intel-class-fl23/syllabus-page','2d3'),
    exact: true
  },
  {
    path: '/robot-intel-class-fl23/docs',
    component: ComponentCreator('/robot-intel-class-fl23/docs','945'),
    routes: [
      {
        path: '/robot-intel-class-fl23/docs/review',
        component: ComponentCreator('/robot-intel-class-fl23/docs/review','f68'),
        exact: true,
        'sidebar': "defaultSidebar"
      }
    ]
  },
  {
    path: '/robot-intel-class-fl23/',
    component: ComponentCreator('/robot-intel-class-fl23/','48c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
