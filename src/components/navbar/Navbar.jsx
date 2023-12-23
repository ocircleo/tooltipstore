import { useState } from "react";
import { Link } from "react-router-dom";
import SideNavlinks from "../activeRoutes/SideNavlinks";
import NavLinks from "../activeRoutes/NavLinks";

const Navbar = ({ links }) => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav)
    }
    return (
        <>
            <nav className="bg-gray-100/50 backdrop-blur-sm flex justify-between items-center h-14 px-3 fixed top-0 w-full z-50">
                <div className="flex gap-10">
                    <Link to={'/'} className="font-semibold capitalize text-xl">tolotip<span className=" text-blue-500">Store</span></Link>
                    <div className="md:flex gap-2 items-center justify-center font-semibold hidden">
                        {
                            links.map(ele => <NavLinks key={ele.link} link={ele}></NavLinks>)
                        }
                    </div>
                </div>
                <div className="flex gap-3 font-semibold items-center">
                    <Link to={'/search'} className="text-xl">🔍</Link>
                    <div className="hidden md:flex gap-3">
                        <NavLinks link={{ link: "login", title: "Login" }} className="hidden md:block bg-white px-2 rounded text-orange-600">Login</NavLinks>
                        <NavLinks link={{ link: "register", title: "Register" }} className="hidden md:block bg-white px-2 rounded text-orange-600">Login</NavLinks>
                    </div>
                    {/* small screen menu toggler */}
                    <div className="bg-white  w-11 p-1 rounded gap-1 flex flex-col cursor-pointer md:hidden" onClick={toggleNav} >
                        <div className={`bg-gray-700 w-full h-[.4rem] rounded-sm ${nav ? "rotate-45 translate-y-2" : ""} duration-300`}></div>
                        <div className={`bg-gray-700 w-full h-[.4rem] ${nav ? "translate-x-[100rem]" : ""} duration-200`}></div>
                        <div className={`bg-gray-700 w-full h-[.4rem] rounded-sm ${nav ? "-rotate-45 -translate-y-2" : ""} duration-300`}></div>
                    </div>
                </div>


            </nav>
            <div className="h-16 w-full bg-gray-100 shadow"></div>
            {/* small screen menu */}

            <div className={`flex flex-col items-stretch md:hidden text-center p-3 gap-3 font-semibold fixed h-screen z-50 top-14 w-full bg-gray-300/50 backdrop-blur duration-150 ${nav ? "left-0" : "left-full"}`}>
                {
                    links.map(ele => <SideNavlinks key={ele.link} link={ele} click={toggleNav}></SideNavlinks>)
                }
                <SideNavlinks link={{ link: "login", title: "Login" }} click={toggleNav}>Login</SideNavlinks>
                <SideNavlinks link={{ link: "register", title: "Register" }} click={toggleNav}>Register</SideNavlinks>
            </div>
        </>
    );
};

export default Navbar;