import React from 'react';

const Detaill = () => {
    return (
        <div className='p-5 w-full md:w-4/6 mx-auto'>
            <div className='flex gap-5  pb-5'>
                <img src="" alt="" className='h-16 w-16 rounded bg-gray-300' />
                <div>
                    <p className='font-semibold'>Name salman</p>
                    <p className='text-gray-500'>Rating: 3.4 <span className='text-xs'>⭐</span></p>
                    <p className='text-gray-500'>12.4 MB</p>
                </div>
            </div>
            <p className='text-gray-600'><span className='text-black font-semibold'>Platform:</span>  windows, android, Ios</p>
            <div className='my-3 flex gap-4'>
                <select name="" id="">
                    <option value="" defaultChecked>Android</option>
                    <option value="">Windows</option>
                    <option value="">Ios</option>
                </select>

                <button className='bg-blue-500 active:scale-90 duration-150 font-semibold rounded border-transparent px-5 py-2 text-white'>Download</button>

            </div>
            <p className='text-black font-semibold pt-5'>About App</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos sequi itaque voluptate error delectus, a quam, ut, animi temporibus praesentium quisquam eveniet nulla possimus qui nobis deleniti omnis? Eius minima libero modi facere! Provident deserunt, illum possimus libero repellat obcaecati eveniet, ut distinctio blanditiis, maxime similique voluptates cupiditate numquam?
            </p>
            <p className='text-black font-semibold pt-5'>Installation Guide</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos sequi itaque voluptate error delectus, a quam, ut, animi temporibus praesentium quisquam eveniet nulla possimus qui nobis deleniti omnis? Eius minima libero modi facere! Provident deserunt, illum possimus libero repellat obcaecati eveniet, ut distinctio blanditiis, maxime similique voluptates cupiditate numquam?
            </p>
           
           
        </div>
    );
};

export default Detaill;