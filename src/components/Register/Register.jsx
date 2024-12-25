'use client';

import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
    const router = useRouter();

    const [region, setRegion] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        // form validation
        if (!region || !name || !email || !password) {
            setError('Error! All fields are required.');
            return;
        }

        setLoading(true);
        setError('');

        // calling API now
        try {
            const res = await axios.post('http://localhost:3000/api/register', { region, name, email, password });
            console.log(res);

            if (res.status===201){
                router.replace ('/login')
            }

            else {
                setError('Registration failed. Try again later')
            }

        } catch (error) {
            setError('Error! check your server:');
        }

        finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-cover bg-center bg-no-repeat h-screen shadow-lg shadow-orange-700" style={{ backgroundImage: "url('/images/register.jpg')" }}>
            {/* nav */}
            <nav className="flex items-center px-[2rem] py-[1rem] bg-white bg-opacity-45 backdrop-blur-xl">
                <Link href={'/'}>
                    <div>
                        <Image src="/images/logo.png" width={10} height={10} alt="tesla_logo" className="cursor-pointer" />
                    </div>
                </Link>
                <div className="ml-auto flex items-center gap-2">
                    <p className="cursor-pointer"><TbWorld /></p>
                    <p className="cursor-pointer">en-US</p>
                </div>   
            </nav>

            {/* Register Form */}
            <div className="flex flex-col w-fit m-auto pt-6 px-10 bg-white rounded-md mt-4 bg-opacity-15 backdrop-blur-sm">
                <h1 className="font-bold text-2xl pt-3">Create an Account</h1>

                <form onSubmit={submitHandler} className="">
                    {error && (
                        <div className="text-base font-semibold py-2 bg-red-500">
                            <h1 className="text-white text-sm text-center rounded-full">{error}</h1>
                        </div>
                    )}
                    <div className="flex flex-col gap-1">
                        <label className="text-white font-semibold" htmlFor="region">Region</label>
                        <select onChange={(e) => setRegion(e.target.value)} className="w-full bg-slate-200 text-sm text-zinc-600 p-2 border border-black rounded-md outline-none" id="region">
                            <option value="">Select Region</option>
                            <option value="canada">Canada</option>
                            <option value="united states">United States</option>
                            <option value="united kingdom">United Kingdom</option>
                            <option value="port harcourt">Port Harcourt</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1 py-3">
                        <label className="text-white font-semibold" htmlFor="name">Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" className="w-full p-2 border text-sm border-black rounded-md outline-none" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-white font-semibold" htmlFor="email">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="@" className="w-full p-2 text-sm border border-black rounded-md outline-none" />
                    </div>

                    <div className="flex flex-col gap-1 pt-3">
                        <label className="text-white font-semibold" htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" className="w-full p-2 text-sm border border-black rounded-md outline-none" />
                    </div>

                    <div className="mt-8">
                        <button onSubmit={submitHandler} type="submit" className="bg-blue-500 text-white w-full py-2 rounded-md">
                            {loading ? "Loading..." : 'Next'}
                        </button>
                    </div>
                </form>

                <ul className="flex items-center mt-5 mb-5 text-[10px] font-bold text-black gap-3">
                    <li className="cursor-pointer hover:bg-black hover:text-white py-1 px-3 rounded-lg">Tesla 2024</li>
                    <li className="cursor-pointer hover:bg-black hover:text-white py-1 px-3 rounded-lg">Privacy & Legal</li>
                    <li className="cursor-pointer hover:bg-black hover:text-white py-1 px-3 rounded-lg">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Register;
