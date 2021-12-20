import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "page-home",
    component: () => import('@/pages/page-home.vue'),
  },
  {
    path: "/apps",
    name: "page-apps",
    component: () => import('@/pages/page-apps.vue'),
    children: [
      {
        path: 'name-finder',
        name: 'page-name-finder',
        component: () => import('@/components/name-finder/name-finder.vue'),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;