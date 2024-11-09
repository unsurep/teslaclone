'use client'

import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";


const Register=()=>{
    return(
        <div className="bg-cover bg-center bg-no-repeat h-screen shadow-lg shadow-orange-700  " style={{ backgroundImage: "url('/images/register.jpg')" }}>
            {/* nav */}
            <nav className="flex items-center px-[2rem] py-[1rem] bg-white bg-opacity-45 backdrop-blur-xl ">
                
                <Link href={'/'}>
                    <div>
                        <Image src="/images/logo.png" width={100} height={100} alt="tesla_logo " className="cursor-pointer"/>
                    </div>
                </Link>

                <div className="ml-auto flex items-center gap-2">
                    <p className="cursor-pointer"><TbWorld /></p>
                    <p className="cursor-pointer">en-US</p>
                </div>   
            </nav>

            {/* Register Form */}
            <div className="flex flex-col w-fit m-auto pt-6 px-10 bg-white rounded-md mt-4 bg-opacity-15 backdrop-blur-sm">
                <p className="text-sm text-white">Step 1 of 1</p>
                <h1 className="font-bold text-2xl py-3">Create an Account</h1>

                <form action="" className="">
                    <div className="flex flex-col gap-1">
                        <label className="text-white font-semibold" htmlFor="">Region</label>
                        <select className="w-fill bg-slate-200 text-sm text-zinc-600 p-2 border border-black border-solid rounded-md outline-none" name="" id="">
                            <option className="" value="">Select Region</option>
                            <option value="">Canada</option>
                            <option value="">United States</option>
                            <option value="">United Kingdom</option>
                            <option value="">Port Harcourt</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1 py-3">
                        <label className="text-white font-semibold" htmlFor="">Name</label>
                        <input type="text"
                        placeholder="Enter name"
                        className="w-fill p-2 border text-sm border-black border-solid rounded-md outline-none"
                        // required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-white font-semibold" htmlFor="">Email</label>
                        <input type="email"
                        placeholder="@"
                        className="w-fill p-2 text-sm border border-black border-solid rounded-md outline-none"
                        // required
                        />
                    </div>

                    <div className="flex flex-col gap-1 pt-3">
                        <label className="text-white font-semibold" htmlFor="">Password</label>
                        <input type="password"
                        placeholder="*********"
                        className="w-fill p-2 text-sm border border-black border-solid rounded-md outline-none"
                        // required
                        />
                    </div>

                    <div className="mt-8 ">
                        <button className="bg-blue-500 text-white w-full py-2 rounded-md">Next</button>
                    </div>
                </form>

                <ul className="flex items-center mt-5 mb-5 text-[10px] font-bold text-black gap-3">
                    <li className="cursor-pointer hover:bg-black hover:text-white py-1 px-3 rounded-lg">Tesla 2024</li>
                    <li className="cursor-pointer hover:bg-black hover:text-white py-1 px-3 rounded-lg">Privacy & Legal</li>
                    <li className="cursor-pointer hover:bg-black hover:text-white py-1 px-3 rounded-lg">Contact</li>
                </ul>

            </div>
        </div>
    )




};

export default Register;