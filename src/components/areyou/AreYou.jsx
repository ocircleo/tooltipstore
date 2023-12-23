import React from 'react';
import { Link } from 'react-router-dom';

const AreYou = () => {
    return (
        <div className='text-center my-6'>
            <h2 className='text-xl font-semibold'>Want To host Your Apps ?</h2>
            <p>You can host apps for free in our site.<Link className='text-blue-600 underline'>Detaills</Link> </p>

            <h2 className='text-xl font-semibold'> Want to healp us ?</h2>
            <p>You can support us to update our site.<Link className='text-blue-600 underline'>Detaills</Link> </p>

        </div>
    );
};

export default AreYou;