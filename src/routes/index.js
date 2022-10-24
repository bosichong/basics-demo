import HookHome from '../comconents/Hook-test'
import Home from '../comconents/Home'

import RouteHome, { HomePage, AboutPage,NewsPage,DetailPage } from '../comconents/Route-test'

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'hook',
        element: <HookHome />,
    },
    {
        path: 'home',
        element: <Home />
    },
    {
        path: 'route',
        element: <RouteHome />,
        children: [
            {
                path: 'aboutpage',
                element: <AboutPage />
            },
            {
                path: 'newspage',
                element: <NewsPage />,
                children: [
                    {
                        path:'detail',
                        element: <DetailPage />
                    },
                ]
            },
            {
                path: 'homepage',
                element: <HomePage />
            }
        ]
    }
]

export default routes