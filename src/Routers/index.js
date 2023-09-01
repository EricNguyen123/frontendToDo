import Home from '~/page/home';
import Login from '~/page/login';
import Register from '~/page/register';
import User from '~/page/user';

import config from '~/config';
import Content from '~/components/container/Content';

import { faCalendarDays, faHouse, faStar, faSun, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

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
        title: 'Ngày của tôi',
        icon: faSun,
    },
    {
        path: config.routes.assignedtome,
        component: Content,
        title: 'Đã giao cho tôi',
        icon: faUser,
    },
    {
        path: config.routes.group,
        component: Content,
        title: 'Nhóm',
        icon: faUsers,
    },
    {
        path: config.routes.important,
        component: Content,
        title: 'Quan trọng',
        icon: faStar,
    },
    {
        path: config.routes.inbox,
        component: Content,
        title: 'Tác vụ',
        icon: faHouse,
    },
    {
        path: config.routes.planned,
        component: Content,
        title: 'Đã lập kế hoạch',
        icon: faCalendarDays,
    },
];

export { publicRoutes, privateRoutes };
