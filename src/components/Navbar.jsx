'use client'

import Image from "next/image"
import Link from "next/link"
import React from "react"

import { BsQuestionCircle } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar=()=>{
    return (
        

        <nav className="bgy" >
            <div>
                <p className="flex m-auto w-full items-center fixed z-50   justify-center text-#171a20 text-[10px] md:text-sm gap-3 py-4 bg-gray-200 px-[1rem] ">0% APR avaliable for Model 3 and Model Y. <u>Learn More</u></p>
            </div>

            
            <div className="flex justify-between items-center px-[1rem] md:px-[2rem] pt-20">

                <div>
                    <img src='/images/logo.png ' width={120} height={120} alt="image"/>
                </div>

                <div className="">
                    <ul className="hidden lg:flex gap-10 text-sm flex-grow ">
                        <li>Vehicles</li>
                        <li>Energy</li>
                        <li>Charging</li>
                        <li>Discover</li>
                        <li>Shop</li>
                        <li>We, Robot</li>
                    </ul>
                </div>

                <div className="hidden lg:flex gap-6 text-xl ">
                    <p><BsQuestionCircle /></p>
                    <p><TbWorld /></p>
                    <p><FaRegUserCircle /></p>
                </div>

                <div className="lg:hidden">
                    <p className="px-4 py-1 bg-neutral-300 rounded-[6px] font-semibold cursor pointer text-sm">Menu</p>
                </div>
            </div>
        </nav>
    )



};

export default Navbar;