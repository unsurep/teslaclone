'use client'

import Image from "next/image"
import Link from "next/link"
import React from "react"

import { BsQuestionCircle } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar=()=>{
    return (
        

        <nav className="" >
            <div>
                <p className="flex m-auto w-full items-center fixed z-50   justify-center text-#171a20 text-[10px] md:text-sm gap-3 py-4 bg-gray-200 px-[1rem] ">0% APR avaliable for Model 3 and Model Y. <u>Learn More</u></p>
            </div>

            
            <div className="flex justify-between items-center px-[1rem] md:px-[2rem] pt-20">

                <div>
                    <img src='/images/logo.png ' width={120} height={120} alt="image"/>
                </div>

                <div className="">
                    <ul className="hidden lg:flex gap-5 text-sm flex-grow ">
                        <li className="hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer">Vehicles</li>
                        <li className="hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer">Energy</li>
                        <li className="hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer">Charging</li>
                        <li className="hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer">Discover</li>
                        <li className="hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer">Shop</li>
                        <li className="hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer">We, Robot</li>
                    </ul>
                </div>

                <div className="hidden lg:flex  text-xl ">
                    <p className="hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"><BsQuestionCircle /></p>
                    <p className="hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"><TbWorld /></p>
                    <p className="hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"><FaRegUserCircle /></p>
                </div>

                <div className="lg:hidden">
                    <p className="px-4 py-1 bg-neutral-300 rounded-[6px] font-semibold cursor pointer text-sm">Menu</p>
                </div>
            </div>
        </nav>
    )



};

export default Navbar;