import { routerController, translate } from 'lib/index';
import postsConfig from './pages/posts/posts';
import loginPageConfig from './pages/login';
import bigtestConfig from './pages/big-test';
import formLayoutConfig from './pages/form-layout';
import PostsIcon from '../assets/icons/file-text.svg';
import postConfig from './pages/posts/post';

// eslint-disable-next-line no-shadow
export enum ROLE {
  SAMPLE = 'SAMPLE'
}

const router = routerController<ROLE>({
  global: {
    homeNoAuthName: 'login',
    homeHasAuthName: 'dashboard',
  },

  routes: [
    {
      type: 'preset',
      route: {
        path: '/login',
        name: 'login',
      },
      preset: {
        preset: 'login',
        config: loginPageConfig,
      },
    },

    {
      type: 'layout',
      layout: {
        layout: 'main',
        name: 'main-layout',
        path: '/',
        props: {
          // headerIcon: () => import('../assets/icons/brand-light.svg'),
          // headerCollapsedIcon: () => import('../assets/icons/logo-light.svg'),
          sidebarGroups: [
            {
              name: 'posts',
              title: translate('pages.posts'),
              icon: () => PostsIcon,
              routes: ['post', 'posts'],
            },
            {
              name: 'technical',
              title: translate('pages.nested'),
              icon: () => import('../assets/icons/grid.svg'),
              routes: ['bigtest', 'form-layout'],
            },
          ],
        },
        routes: [
          {
            type: 'custom',
            route: {
              path: '/',
              name: 'dashboard',
              component: () => import('../app/pages/home.vue'),
              roles: [ROLE.SAMPLE],
              title: translate('pages.home'),
              visible: true,
              icon: () => import('../assets/icons/home.svg'),
            },
          },

          {
            type: 'preset',
            route: {
              path: '/post/:id',
              name: 'post',
              title: translate('post.new_post'),
              visible: true,
              link: { name: 'post', params: { id: 'new' } },
            },
            preset: {
              preset: 'card',
              config: postConfig,
            },
          },

          {
            type: 'preset',
            route: {
              path: '/posts',
              name: 'posts',
              title: translate('pages.posts'),
              visible: true,
            },
            preset: {
              preset: 'table',
              config: postsConfig,
            },
          },

          {
            type: 'preset',
            route: {
              path: '/big-test',
              name: 'bigtest',
              title: translate('pages.form_test'),
              icon: () => import('../assets/icons/key.svg'),
              visible: true,
            },
            preset: {
              preset: 'card',
              config: bigtestConfig,
            },
          },

          {
            type: 'preset',
            route: {
              path: '/form-layout',
              name: 'form-layout',
              title: translate('pages.form_layout'),
              icon: () => import('../assets/icons/layout.svg'),
              visible: true,
            },
            preset: {
              preset: 'card',
              config: formLayoutConfig,
            },
          },
        ],
      },
    },

    {
      type: 'preset',
      route: {
        path: '/:pathMatch(.*)*',
        name: 'error',
      },
      preset: {
        preset: '404',
        config: {},
      },
    },
  ],
});

export default router;
