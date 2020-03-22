export default [
    {
        path: '/',
        component: () => import(/* webpackChunkName:"index" */'./pages/home'),
        routes: [
            {
                path: '/',
                exact: true,
                redirect: '/home',
            },
            {
                path: '/home',
                exact: true,
                component: () => import(/* webpackChunkName:"home" */'./pages/index/index'),
            },
        ],
    },
];
