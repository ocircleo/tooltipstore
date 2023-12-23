import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AppCardSmall = () => {
    const navigate = useNavigate()
    // let clicked = true;
    // const pointerDown = () => {
    //     console.log(clicked)
    //     clicked = true;
    //     setTimeout(() => {
    //         clicked = false;
    //         console.log(clicked)
    //     }, 100);
    // }
    // const pointerUp = () => {
    //     if (clicked) {
    //         navigate("/ok")
    //         console.log('"navigatiind')
    //     };
    // }

    return (

        <div className='flex gap-3 py-3 px-2 hover:bg-gray-50 w-32 flex-col float-left bg-white rounded'>
            <img src="" alt="" className='h-20 w-20 rounded bg-gray-300 ' />
            <div className='w-auto flex flex-col'>
                <p className='text-xs font-semibold text-gray-700 '>Name salman</p>
                <p className='text-xs float-left text-gray-500'>pc,  3.4⭐</p>
                
                <Link to={"'/"} className='text-sm font-semibold text-blue-400 underline'> Detaill</Link>
            </div>
        </div>


    );
};

export default AppCardSmall;