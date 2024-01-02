import React from 'react';

const Button = ({ text, type, click }) => {
    const onclick = () => {
        if (click) {
            click()
        }

    }
    return (
        <button type={type} onClick={onclick} className='bg-blue-400 text-white font-semibold px-3 py-3 capitalize rounded active:scale-90 duration-100'>
            {
                text
            }
        </button>
    );
};

export default Button;