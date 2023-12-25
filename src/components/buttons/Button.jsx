import React from 'react';

const Button = ({ text, type }) => {
    return (
        <button type={type} className='bg-blue-400 text-white font-semibold px-3 py-3 capitalize rounded active:scale-90 duration-100'>
            {
                text
            }
        </button>
    );
};

export default Button;