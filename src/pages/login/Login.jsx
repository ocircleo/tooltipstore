import React, { useState } from 'react';
import Button from '../../components/buttons/Button';
import { Link } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState("Login")
    const emailLogin = (e) => {
        e.preventDefault();
        setLoading("please wait...");
        setTimeout(() => setLoading("Finding your account..."), 4 * 1000)
        setTimeout(() => setLoading("Processing ..."), 7 * 1000)
        setTimeout(() => setLoading("Almost there..."), 10 * 1000)
        let form;
    }
    return (
        <div className='w-full mt-4 px-2'>
            <h2 className='text-lg font-semibold text-center'>If you <span className='font-extrabold'>already</span> have an account you can login. <br /> Else <Link to={"/register"} className='text-blue-500 underline'>Register</Link>  first</h2>
            <h2 className='text-xl font-extrabold text-center py-5'> </h2>
            <form onSubmit={emailLogin} className='bg-gray-100 w-full md:w-[37rem] px-2 md:px-10 pt-3 md:pt-8 rounded flex flex-col gap-4 mx-auto'>
                <h2 className='text-xl font-semibold'>Login With Email</h2>
                <fieldset className='flex flex-col gap-2 items-stretch'>
                    <label htmlFor="email">Enter Email</label>
                    <input type="email" name="email" id="email" className='border-2 px-3 py-2 rounded border-blue-500 bg-white' required />
                </fieldset>
                <fieldset className='flex flex-col gap-2 items-stretch'>
                    <label htmlFor="password">Enter Password</label>
                    <input type={show ? "text" : "password"} name="password" id="password" className='border-2 px-3 py-2 rounded border-blue-500 bg-white' required />
                </fieldset>
                <fieldset className='flex items-center gap-2 ' >
                    <input onClick={() => setShow(!show)} type="checkbox" name="showPassword" id="showPassword" checked={show ? true : false} className='cursor-pointer h-4 w-4' />
                    <p onClick={() => setShow(!show)} className='select-none cursor-pointer'>Show Password</p>
                </fieldset>
                <Button type={"submit"} text={loading}></Button>
                <p className='text-center font-semibold'>or</p>
            </form>
            <div className='bg-gray-100  md:w-[37rem] pb-4 px-1 md:px-10 pt-1 mb-12 mx-auto'>
                <button className='font-semibold w-full text-center  py-3 text-white self-stretch rounded-md border-2  bg-orange-600'>  Login with Google</button>
                <p className='text-sm text-center py-2'>Dont have an account ? Then  <Link className='text-blue-600 underline' to={"/register"}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;

