import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLinks from '../../components/activeRoutes/NavLinks';

const SearchBar = () => {
    const navigate = useNavigate()
    const urls = [
        {
            link: "/",
            title: "Home"
        }, {
            link: "/apps",
            title: "Apps"
        }, {
            link: "/games",
            title: "Games"
        },
    ]
    return (
        <search className='flex justify-between border shadow bg-white/50 backdrop-blur w-full h-16 items-center p-3'>
            {/* for large screen search bar */}
            <div className='hidden h-full items-center gap-3 md:flex'>
                <Link to={'/'} className="font-semibold capitalize text-xl ">tolotip<span className=" text-blue-500">Store</span></Link>

                {
                    urls.map(ele => <NavLinks key={ele.link} link={ele}></NavLinks>)
                }
            </div>
            <div className='hidden md:flex h-full w-full md:w-3/6'>
                <input type="search" name="search" id="search" placeholder='Type to Search' className='w-full h-full border-b-2 px-2 outline-transparent focus:outline-transparent bg-transparent  focus:border-b-4' />
                <button className='bg-white px-2 active:scale-95 duration-100 border-2 text-black rounded '>🔍</button>
            </div>
            {/* //End of large screen search bar */}
            {/* for small screen search bar below */}
            <div className='flex h-full w-full md:w-4/6 md:hidden'>
                <button className='text-2xl font-extrabold select-none px-1 md:px-2 h-full rounded-s-md border-s-2 border-t-2 border-b-2 ' onClick={() => navigate(-1)}>←</button>
                <input type="search" name="search" id="search" placeholder='Type to Search' className='w-full h-full border-2 select-none px-2' />
                <button className='bg-white h-full px-2 rounded-e-md active:scale-95 duration-100 border-t-2 border-e-2 border-b-2 text-black'>✖</button>

            </div>
        </search>
    );
};

export default SearchBar;