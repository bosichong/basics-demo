import About from '../components/About'
import Home from '../components/Home'

const routes = [
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/about',
        element:<About />
    },
    {
        path:'/home',
        element:<Home />
    }
]

export default routes