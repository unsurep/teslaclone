'use client'


import Link from "next/link"
import React, { useState } from "react"

import { BsQuestionCircle } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Image } from "next/image";
import m3a from '../components/Images/m3a.jpg'

const Navbar=()=>{
    const [showMenu, setShowMenu]=useState(false);
    const [showVehicle, setShowVehicle]=useState(false);

    const toggleShowMenu=()=>{
        setShowMenu(!showMenu)
    }

    const toggleShowVehicle=()=>{
        setShowVehicle(!showVehicle)
        
    }





    return (
        

        <nav className="relative" >
            <div>
                <p className="flex m-auto w-full items-center fixed z-50   justify-center text-#171a20 text-[10px] md:text-sm gap-3 pt-4 bg-gray-200 px-[1rem] ">0% APR avaliable for Model 3 and Model Y. <u>Learn More</u></p>
            </div>

            
            <div className="flex justify-between items-center px-[1rem] md:px-[3rem] pt-[3.5rem] ">

                <div>
                    <img src='/images/logo.png ' width={120} height={120} alt="image"/>
                </div>

                <div className=" relative">
                    <ul className="hidden lg:flex gap-5 text-sm flex-grow ">
                        <li onClick={toggleShowVehicle} className="hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer">Vehicles</li>
                        {/* drop down for vehicle */}

                        {showVehicle===true ? <div className="bg-white h-[80vh] top-[6rem] left-0 absolute w-[50vw] flex py-[1rem] px-[1rem]">

                            <div className="grid grid-cols-3 gap-2">
                                {/* model s */}
                                <div className="w-fit h-fit">
                                    <div>
                                        <img src="/images/msbg.png" width={150} height={150} alt="carImage" className="cursor-pointer"/>
                                    </div>

                                    <h1 className="text-center pt-5 font-bold">Model S</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        <button><u>Learn</u></button>
                                        <button><u>Order</u></button>
                                    </div>
                                </div>
                                
                                {/* model 3 */}
                                <div className="w-fit h-fit">
                                    <div>
                                        <img src="/images/m3bg.png" width={150} height={150} alt="carImage" className="cursor-pointer"/>
                                    </div>

                                    <h1 className="text-center  pt-5 font-bold">Model 3</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        <button><u>Learn</u></button>
                                        <button><u>Order</u></button>
                                    </div>
                                </div>

                                {/* model x */}
                                <div className="w-fit h-fit">
                                    <div>
                                        <img src="/images/msbg.png" width={150} height={150} alt="carImage" className="cursor-pointer"/>
                                    </div>

                                    <h1 className="text-center pt-5 font-bold">Model X</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        <button><u>Learn</u></button>
                                        <button><u>Order</u></button>
                                    </div>
                                </div>

                                {/* model y */}
                                <div className="w-fit h-fit">
                                    <div>
                                        <img src="/images/blue.png" width={150} height={150} alt="carImage" className="cursor-pointer"/>
                                    </div>
                                
                                    <h1 className="text-center pt-5 font-bold">Model Y</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        <button><u>Learn</u></button>
                                        <button><u>Order</u></button>
                                    </div>
                                </div>

                                {/* cybertruck */}
                                <div className="w-fit h-fit">
                                    <div>
                                        <img src="/images/cyber.png" width={150} height={150} alt="carImage" className="cursor-pointer"/>
                                    </div>

                                    <h1 className="text-center pt-5 font-bold">Model S</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        <button><u>Learn</u></button>
                                        <button><u>Order</u></button>
                                    </div>
                                </div>

                                {/* help me choose */}
                                <div className="w-fit h-fit">
                                    <div>
                                        <img src="/images/black.png" width={150} height={150} alt="carImage" className="cursor-pointer"/>
                                    </div>

                                    <h1 className="text-center pt-8 font-bold">Help Me Choose</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        {/* <button><u>Learn</u></button> */}
                                        <button><u>Get Started</u></button>
                                    </div>
                                </div>

                                
                            </div>


                            <div className="ml-auto py-[1rem]">
                                <ul className="border-l px-5 flex flex-col gap-4 font-semibold text-[12px]">
                                    <li className="cursor-pointer">Inventory</li>
                                    <li className="cursor-pointer">Used Cars</li>
                                    <li className="cursor-pointer">Demo Drive</li>
                                    <li className="cursor-pointer">Trade-in</li>
                                    <li className="cursor-pointer">Compare</li>
                                    <li className="cursor-pointer">Help Me Charge</li>
                                    <li className="cursor-pointer">Fleet</li>
                                    <li className="cursor-pointer">Semi</li>
                                    <li className="cursor-pointer">Roster</li>
                                    <li className="cursor-pointer">Federal Tax Credit</li>
                                </ul>
                            </div>








                        </div> : '' }



                        






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

                {/* toggle menu drop down */}
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
                    </div></div> :  <p  className="px-4 py-1 bg-neutral-300 rounded-[6px] font-semibold cursor pointer text-sm;">Menu</p> }
                
                </div>





            </div>
        </nav>
    )



};

export default Navbar;

