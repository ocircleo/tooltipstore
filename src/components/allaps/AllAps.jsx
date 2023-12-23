import React from 'react';
import AppCard from '../appcard/AppCard';

const AllAps = () => {
    let arr = [...new Array(12).keys()];
    return (
        <>

            <h2 className='text-xl font-semibold py-6 px-3 text-center'>Recomemded For You</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    arr.map(ele => <AppCard key={ele}></AppCard>)
                }
            </div>
        </>
    );
};

export default AllAps;