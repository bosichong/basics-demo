import HookHome from '../components/Hook-test'
import Home from '../components/Home'

import RouteHome, { HomePage, AboutPage,NewsPage,DetailPage } from '../components/Route-test'

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