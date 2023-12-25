import { createBrowserRouter } from 'react-router-dom'
import App from "./App"
import Home from "./pages/home/Home";
import Dev from './Dev';
import Admin from './Admin';
import About from './pages/about/About';
import Search from './pages/search/Search';
import Detaill from './pages/detaill/Detaill';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './dashboard/Dashboard';
import Profile from './dashboard/pages/profile/Profile';
import Wishlist from './dashboard/pages/wishlist/Wishlist';
import Settings from './dashboard/pages/settings/Settings';
import MyApps from './dashboard/pages/myapps/MyApps';
import Upload from './dashboard/pages/upload/Upload';
import Messages from './dashboard/pages/messages/Messages';
import Contact from './pages/contact/Contact';
import Events from './pages/events/Events';
import Games from './pages/games/Games';
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
                path: "games",
                element: <Games></Games>
            }, {

                path: "contact",
                element: <Contact></Contact>

            }, {

                path: "events",
                element: <Events></Events>

            }, {
                path: "detaill",
                element: <Detaill></Detaill>
            }, {
                path: "login",
                element: <Login></Login>
            }, {
                path: "register",
                element: <Register></Register>
            }
        ]
    }, {
        path: "/",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'profile',
                element: <Profile></Profile>
            }, {
                path: "wishlist",
                element: <Wishlist></Wishlist>
            }, {
                path: "settings",
                element: <Settings></Settings>
            }, {
                path: "messages",
                element: <Messages></Messages>
            }, {
                path: "myapps",
                element: <MyApps></MyApps>
            }, {
                path: "upload",
                element: <Upload></Upload>
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