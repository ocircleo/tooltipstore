import { createBrowserRouter } from 'react-router-dom'
import App from "./App"
import Home from "./pages/home/Home";
import Dev from './Dev';
import Admin from './Admin';
import About from './pages/about/About';
import Search from './pages/search/Search';
import Detaill from './pages/detaill/Detaill';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            }, {
                path: "about",
                element: <About></About>
            }, {
                path: "detaill",
                element: <Detaill></Detaill>
            }
        ]
    }, {
        path: "search",
        element: <Search></Search>,
    }, {
        path: "dev",
        element: <Dev></Dev>
        //will have childrens
        //will have different layout
    }, {
        path: "admin",
        element: <Admin />
        //will have childrens
        //will have different layout
    }
])
export default router;