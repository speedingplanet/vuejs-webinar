import UsersManager from './UsersManager';
import UsersGrid from './UsersGrid';

export const usersRoutes = [
  {
    path: '/users',
    component: UsersManager,
    children: [
      {
        path: 'grid',
        component: UsersGrid,
      },
    ],
  },
];
