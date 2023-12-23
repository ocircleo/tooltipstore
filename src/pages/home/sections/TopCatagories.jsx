import React from 'react';

const TopCatagories = () => {
    return (
        <div className='flex gap-2 mt-2 mx-3'>
            <button className='bg-gray-100 border-2 border-gray-400 px-2  rounded text-xs font-semibold '>Apps</button>
            <button className='bg-gray-100 border-2 border-gray-400 px-2  rounded text-xs font-semibold '>Games</button>
        </div>
    );
};

export default TopCatagories;