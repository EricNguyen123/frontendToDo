import Home from '~/page/home';
import Login from '~/page/login';
import Register from '~/page/register';
import User from '~/page/user';

import config from '~/config';
import Content from '~/components/container/Content';

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
        component: Content,
        layout: Home,
    },
    {
        path: config.routes.user,
        component: User,
        layout: User,
    },
    {
        path: config.routes.myday,
        component: Content,
    },
    {
        path: config.routes.assignedtome,
        component: Content,
    },
    {
        path: config.routes.group,
        component: Content,
    },
    {
        path: config.routes.important,
        component: Content,
    },
    {
        path: config.routes.inbox,
        component: Content,
    },
    {
        path: config.routes.planned,
        component: Content,
    },
];

export { publicRoutes, privateRoutes };
