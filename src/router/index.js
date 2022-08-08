import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "page-home",
    component: () => import('@src/pages/page-home.vue'),
  },
  {
    path: "/apps",
    name: "page-apps",
    component: () => import('@src/pages/page-apps.vue'),
    children: [
      {
        path: 'name-finder',
        name: 'page-name-finder',
        component: () => import('@src/components/name-finder/name-finder.vue'),
      },
      {
        path: 'cars-filter',
        name: 'page-cars-filter',
        component: () => import('@src/components/cars-filter/cars-filter.vue'),
      },
    ],
  },
  {
    path: '/article/:articleId',
    name: 'page-article',
    component: 'page-article',
    component: () => import('@src/components/page-article.vue'),
    props: {
      article: {}
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;