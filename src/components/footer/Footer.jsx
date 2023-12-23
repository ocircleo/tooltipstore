import React from 'react';
import AreYou from '../areyou/AreYou';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>


            <div className='bg-gray-700 text-white pt-10 pb-5 text-center px-3 '>
                <div className='flex flex-col sm:flex-row items-center justify-center md:items-start gap-10 md:gap-24  w-full md:w-5/6 lg":w-4/6 xl:w-3/6 mx-auto '>
                    <div className='text-start'>
                        <h3 className='text-lg font-semibold'>Tooltip Store</h3>

                        <p>
                            A platform for hosting app

                        </p>
                    </div>

                    <ul className='flex flex-col items-start underline capitalize'>
                        <li><Link>Home </Link></li>
                        <li><Link>About </Link></li>
                        <li><Link>Contact </Link></li>
                        <li><Link>Faq </Link></li>
                    </ul>

                    <ul className='flex flex-col items-start underline capitalize'>
                        <li><Link>host your app </Link></li>
                        <li><Link>Support us </Link></li>
                        <li><Link>Privacy Policy </Link></li>
                        <li><Link>Devlopers</Link></li>
                    </ul>

                </div>
                <p className=' text-white text-center pb-2 pt-10 mb-2'>
                    Copy write <Link className='underline ' to={'https://dev.salman.com.bd'} target='_blank'>@salman</Link> 2023-2024

                </p>
            </div>
        </>
    );
};

export default Footer;