import { createRouter, createWebHashHistory } from 'vue-router';
// createWebHistory
import { store } from '../store';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'login_index',
      component: () => import('../views/initialPage.vue'),
    },
    {
      path: '/layout',
      name: 'main',
      component: () => import('../views/main.vue'),
      redirect: validSession() ? '/home' : '/',
      children: [
        {
          path: '/home',
          name: 'dashboard',
          component: () => import('../views/applications.vue'),
        },
        {
          path: '/createVendor',
          name: 'createVendor',
          component: () => import('../views/creatorvendor.vue'),
        },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: validSession() ? '/home' : '/' },
  ],
});

export default router;

router.beforeEach(async (to, from, next) => {
  store.commit('setQuery', null);
  if (Object.keys(to.query).length > 0 && to.query.constructor === Object) {
    store.commit('setQuery', to.query);
    if (to.query.authCode && to.query.appcode) {
      store.dispatch('auth/getAuthSession');
    }

    next();
  } else {
    if (validSession() && to.path == '/') {
      store.dispatch('vendor/getVendorData', 'naviGate');
      next();
    } else if (!validSession() && from.path == '/' && to.path == '/') {
      store.dispatch('auth/naviGateWeb');
    } else {
      next();
    }
  }
});

function validSession() {
  let userId = JSON.parse(localStorage.getItem('userId')!);
  let accessToken = JSON.parse(localStorage.getItem('accessToken')!);
  if (userId) {
    store.commit('auth/setUserId', userId);
  }
  if (accessToken) {
    store.commit('auth/setAuthToken', accessToken);
  }
  let valid: any;
  userId && accessToken ? (valid = true) : (valid = false);

  return valid;
}
