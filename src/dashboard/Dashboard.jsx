import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideNavlinks from '../components/activeRoutes/SideNavlinks';

const Dashboard = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav)
    }
    const urls = [
        {
            link: "/profile",
            title: "Profile"
        }, {
            link: "/wishlist",
            title: "Wishlist"
        }, {
            link: "/settings",
            title: "Settings"
        }, {
            link: "/messages",
            title: "Messages"
        },{
            link:"/myapps",
            title:"My Apps"
        },{
            link: "/upload",
            title:"Upload App"
        }, {
            link: "/",
            title: "Home"
        }
    ]
    return (
        <div className=' h-screen'>
            {/* side navbar for small screen with toggler */}

            {/* side nav for big screen */}
            <div className='h-full bg-gray-100 md:w-48 lg:w-56 xl:w-64  float-left md:flex flex-col gap-2 p-3 text-center hidden '>
                {
                    urls.map(ele => <SideNavlinks key={ele.link} link={ele} click={false}></SideNavlinks>)
                }
            </div>
            <div className='h-full md:overflow-y-scroll bg-white'>
                <nav className='bg-white shadow border flex justify-between h-14 items-center px-1'>
                    <h2 className='font-semibold text-lg'>User Dashboard</h2>
                    <div className="bg-white  w-11 p-1 rounded gap-1 flex flex-col cursor-pointer md:hidden" onClick={toggleNav} >
                        <div className={`bg-gray-700 w-full h-[.4rem] rounded-sm ${nav ? "rotate-45 translate-y-2" : ""} duration-300`}></div>
                        <div className={`bg-gray-700 w-full h-[.4rem] ${nav ? "translate-x-[100rem]" : ""} duration-200`}></div>
                        <div className={`bg-gray-700 w-full h-[.4rem] rounded-sm ${nav ? "-rotate-45 -translate-y-2" : ""} duration-300`}></div>
                    </div>
                </nav>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;