import React from 'react';

const Comments = () => {
    let arr = [...new Array(3).keys()]
    return (
        <section className='flex gap-2 flex-col my-6 w-full md:w-4/6'
        >
            <p className='text-xl font-semibold'>Reviews and Comments </p>
            {
                arr.map(ele => <div className='bg-gray-100 rounded p-3'>
                    <p className='font-semibold'>salman hosain</p>
                    <p className='bg-white p-2 rounded'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum qui corrupti quasi dolores vel, tempora illo ex </p>
                </div>)
            }
        </section>
    );
};

export default Comments;