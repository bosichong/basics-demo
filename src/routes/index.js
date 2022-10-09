import Hook from '../components/Hook-test'
import Home from '../components/Home'
import Route from '../components/Route-test'

const routes = [
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/hook',
        element:<Hook />
    },
    {
        path:'/home',
        element:<Home />
    },
    {
        path:'/route',
        element:<Route />
    }
]

export default routes