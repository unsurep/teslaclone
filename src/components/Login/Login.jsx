'use client'

import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";



const Login=()=>{
    return (
        <div className="bg-cover bg-center bg-no-repeat h-screen shadow-lg shadow-orange-700  " style={{ backgroundImage: "url('/images/login.jpg')" }}>
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

            {/* Sign In */}
            <div className="flex flex-col w-fit m-auto pt-12 px-10 bg-white rounded-md mt-4 bg-opacity-15 backdrop-blur-sm">
                <h1 className="text-3xl  text-white">Sign In</h1>
                
                <form action="">
                    <div className="flex flex-col gap-1 py-3">
                        <label className="text-zinc-200" htmlFor="">Email</label>
                        <input type="email"
                        placeholder="@"
                        // required
                        className="w-fill p-2 border text-sm border-black border-solid rounded-md outline-none"/>
                    </div>

                    <div className="flex flex-col gap-1 py-3">
                        <label className="text-zinc-200" htmlFor="">Password</label>
                        <input type="password"
                        placeholder="************" 
                        // required
                        className="w-fill p-2 border text-sm border-black border-solid rounded-md outline-none"/>
                    </div>

                    <div className="mt-5">
                        <button className="bg-blue-500 text-white w-full py-2 rounded-md">Submit</button>
                    </div>

                    <p className="mt-5 text-center  text-base text-white"><i>Or</i></p>

                    <Link href={'/register'}>
                        <div className="mt-5">
                            <button className="bg-zinc-300 text-neutral-900 w-full py-2 rounded-md">Create Account</button>
                        </div>
                    </Link>
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

export default Login