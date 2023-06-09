'use client'
import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import Image from 'next/image';
import axios from 'axios';
import { toast } from 'react-hot-toast';
export default function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const registerUser = async (e) => {
        e.preventDefault()
        axios.post("/api/register", data)
            .then(() => toast.success("User has been created"))
            .catch((err) => toast.error("Something went wrong"))
    }
    return (
        <>
            <div className="flex min-h-screen sm:min-h-full flex-col justify-center px-6 sm:h-screen">
                <div className="sm:mx-auto sm:w-full h-auto sm:max-w-sm bg-gray-900 my-5 px-4 rounded-2xl">                    {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm "> */}
                    <Image className="mx-auto" src={logo} alt="Your Company" width={200} height={200} />
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300">Register your account</h2>
                    {/* </div> */}

                    {/* <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm "> */}
                    <form className="space-y-4 " onSubmit={registerUser}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">Name</label>
                            <div className="mt-2">
                                <input id="name" name="name" type="name" autoComplete="name" required value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 mt-5 sm:mt-10 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                        </div>
                    </form>
                    <div className='lg:mt-10'>
                        <p className="text-center text-sm text-gray-500">
                            Already a member?
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign In</a>
                        </p>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

