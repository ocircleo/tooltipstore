import React from 'react';
import toTop from '../../../hooks/toTop';
import useTitle from '../../../hooks/useTitle';
import Button from '../../../components/buttons/Button';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    toTop()
    useTitle("Profile")
    const navigate = useNavigate()
   
    return (
        <div className='min-h-screen py-4'>
            <div className='w-full flex flex-col items-center justify-center'>
                <img src="" alt="" className='h-44 w-44 rounded-full border bg-gray-200' />
                <p className='font-semibold text-lg py-2'> Salman hossain</p>
                <Button type={"button"} text={"Edit Info"}></Button>
            </div>
            <div className='p-3 flex flex-col gap-2 w-full md:w-5/6 lg:w-4/6 mx-auto'>
                <p className='text-lg font-semibold underline underline-offset-4'>Your Info:</p>
                <p> <span className='font-semibold'>Name:</span> Salman hossain</p>
                <p><span className='font-semibold'>Email:</span> web.salman.pro@gmail.com</p>
                <p><span className='font-semibold'>Phone:</span> +880 1677176199</p>
                <p><span className='font-semibold'>loaction:</span> Sanora, Dhamrai, Dhaka, Bangladesh</p>

            </div>
        </div>
    );
};

export default Profile;