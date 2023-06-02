'use client'
import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import github from '../../assets/github.svg'
import google from '../../assets/google.svg'
import spinner from '../../assets/spinner.svg'
import Image from 'next/image';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { UilSpinnerAlt } from '@iconscout/react-unicons'
export default function Register() {
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState(false);
    const [githubLoading, setGithubLoading] = useState(false); // Add GitHub loading state
    const [googleLoading, setGoogleLoading] = useState(false); // Add Google loading state

    const loginUser = async (e) => {
        e.preventDefault();
        setLoading(true);

        signIn('credentials', { ...data, redirect: false })
            .then((callback) => {
                if (callback?.error) {
                    toast.error(callback.error);
                }
                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in Successfully');
                    window.location.href = '/';
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleGithubSignIn = () => {
        setGithubLoading(true); // Start GitHub loading state

        signIn('github', { callbackUrl: '/', redirect: false })
            .then((callback) => {
                if (callback?.error) {
                    toast.error(callback.error);
                }
                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in with GitHub');
                    window.location.href = '/';
                }
            })
            .finally(() => {
                setGithubLoading(false); // Stop GitHub loading state
            });
    };

    const handleGoogleSignIn = () => {
        setGoogleLoading(true); // Start Google loading state

        signIn('google', { callbackUrl: '/', redirect: false })
            .then((callback) => {
                if (callback?.error) {
                    toast.error(callback.error);
                }
                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in with Google');
                    window.location.href = '/';
                }
            })
            .finally(() => {
                setGoogleLoading(false); // Stop Google loading state
            });
    };
    return (
        <>
            <div className="flex min-h-screen sm:min-h-full flex-col justify-center px-6 sm:h-screen">
                <div className="sm:mx-auto sm:w-full h-auto sm:max-w-sm bg-gray-900 my-5 px-4 rounded-2xl">
                    {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm "> */}
                    <Image className="mx-auto" src={logo} alt="Your Company" width={200} height={200} />
                    <h2 className=" text-center text-2xl font-bold text-gray-800 dark:text-gray-200">Sign In to your account</h2>
                    <form className="space-y-4 " onSubmit={loginUser}>
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
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 mt-5 sm:mt-10 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={loading}>
                                {loading ? (
                                    <div>
                                        <UilSpinnerAlt className="h-7 w-6    rounded-full animate-spin" />
                                    </div>
                                ) : (<div>Login</div>)
                                }</button>
                        </div>
                    </form>
                    <div className='lg:mt-10'>
                        <p className="text-center text-sm text-gray-500">
                            Not a member?
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign Up</a>
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className='flex items-center justify-center'>
                            <button
                                type="button"
                                className="inline-flex flex-col items-center rounded-md px-3 py-2 my-2 text-sm font-semibold hover:bg-black/80"
                                onClick={handleGithubSignIn}
                                disabled={githubLoading}
                            >
                                {githubLoading ? (
                                    <div className="flex flex-col items-center justify-center">
                                        <UilSpinnerAlt className="h-12 w-12    rounded-full animate-spin" />
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center">
                                        <Image src={github} height={50} width={50} />
                                    </div>
                                )}
                                <p>Sign In with Github</p>
                            </button>
                        </div>

                        <div className='flex items-center justify-center'>
                            <button
                                type="button"
                                className="inline-flex flex-col items-center rounded-md px-3 py-2 my-2 text-sm font-semibold hover:bg-black/80"
                                onClick={handleGoogleSignIn}
                                disabled={googleLoading}
                            >
                                {googleLoading ? (
                                    <div className="flex flex-col items-center justify-center " >
                                        <UilSpinnerAlt className="h-12 w-12    rounded-full animate-spin" />
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center">
                                        <Image src={google} height={50} width={50} />
                                    </div>
                                )}
                                <p>Sign In with Google</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div > */}
            {/* </div> */}
        </>
    )
}

