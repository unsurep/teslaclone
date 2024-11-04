'use client'

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

import { BsQuestionCircle } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar=()=>{
    const [showMenu, setShowMenu]=useState(false)

    const toggleShowMenu=()=>{
        setShowMenu(!showMenu)
    }





    return (
        

        <nav className="relative" >
            <div>
                <p className="flex m-auto w-full items-center fixed z-50   justify-center text-#171a20 text-[10px] md:text-sm gap-3 pt-4 bg-gray-200 px-[1rem] ">0% APR avaliable for Model 3 and Model Y. <u>Learn More</u></p>
            </div>

            
            <div className="flex justify-between items-center px-[1rem] md:px-[2rem] pt-[3.5rem] ">

                <div>
                    <img src='/images/logo.png ' width={120} height={120} alt="image"/>
                </div>

                <div className="">
                    <ul className="hidden lg:flex gap-5 text-sm flex-grow ">
                        <li className="hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer">Vehicles</li>
                        {/* drop down for vehicle */}

                        <div>
                            {/* cars */}
                            <div></div>






                            {/* writeup */}
                            <div></div>
                        </div>







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

                <div onClick={toggleShowMenu} className="lg:hidden ">
                    {showMenu===true?
                    
                    <div className="text-2xl hover:bg-neutral-300 text-black rounded-full p-1"><IoMdClose />
                    <div className="absolute left-0 top-[7rem] h-screen w-[100vw] bg-white ">
                        <ul className="flex flex-col gap-2 text-center text-base">
                            <li className="hover:text-blue-600 cursor-pointer font-bold"><u>Home</u></li>
                            <li>Vehicle</li>
                            <li>Energy</li>
                            <li>Charging</li>
                            <li>Discover</li>
                            <li>Shop</li>
                            <li>We, Robot</li>
                            <li>Support</li>
                            <li>Country</li>
                            <li>Account</li>
                        </ul>
                    </div></div> :  <p  className="px-4 py-1 bg-neutral-300 rounded-[6px] font-semibold cursor pointer text-sm">Menu</p> }
                
                </div>





            </div>
        </nav>
    )



};

export default Navbar;

{/* <p  className="px-4 py-1 bg-neutral-300 rounded-[6px] font-semibold cursor pointer text-sm">Menu</p> */}