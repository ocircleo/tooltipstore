import React from 'react';
import { Link } from 'react-router-dom';

const AppCard = ({ mouseup }) => {
    return (
        <Link to={"/detaill"}>
            <div className='flex gap-5 p-5 hover:bg-gray-100 bg-gray-50'>
                <img src="" alt="" className='h-16 w-16 rounded bg-gray-300' />
                <div>
                    <p className='font-semibold'>Name salman</p>
                    <p className='text-gray-500'>pc, 3.4 <span className='text-xs'>⭐</span></p>
                    <p className='text-gray-500'>12.4 MB</p>

                </div>
            </div>
        </Link>

    )
};

export default AppCard;