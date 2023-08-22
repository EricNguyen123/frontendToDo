import Home from '~/page/home';
import Login from '~/page/login';
import Register from '~/page/register';
import User from '~/page/user';

import config from '~/config';

const publicRoutes = [
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.register,
        component: Register,
    },
];

const privateRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.user,
        component: User,
    },
];

export { publicRoutes, privateRoutes };
