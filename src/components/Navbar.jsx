'use client'


import { useEffect } from 'react';
import React, { useState } from "react"
import { BsQuestionCircle } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";



const Navbar=()=>{
    const [showMenu, setShowMenu]=useState(false);
    const [showVehicle, setShowVehicle]=useState(false);
    const [showEnergy, setShowEnergy]=useState(false);
    const [showCharging, setShowCharging]=useState(false);
    const [showDiscover, setShowDiscover]=useState(false);
    const [showShop, setShowShop]=useState(false);
   

    const toggleShowMenu=()=>{
        setShowMenu(!showMenu);
    }

    const toggleShowShop=()=>{
        setShowShop(!showShop);
        setShowVehicle(false);
        setShowEnergy(false);
        setShowCharging(false);
        setShowDiscover(false);
        setSignin(false);
    }

    const toggleShowVehicle=()=>{
        setShowVehicle(!showVehicle);
        setShowEnergy(false);
        setShowCharging(false);
        setShowDiscover(false);
        setShowShop(false);
        setSignin(false);
    }

    const toggleShowEnergy=()=>{
        setShowEnergy(!showEnergy);
        setShowVehicle(false);
        setShowCharging(false);
        setShowDiscover(false);
        setShowShop(false);
        setSignin(false);
    }

    const toggleShowCharging=()=>{
        setShowCharging(!showCharging);
        setShowVehicle(false);
        setShowEnergy(false);
        setShowDiscover(false);
        setShowShop(false);
        setSignin(false);
    }

    const toggleShowDiscover=()=>{
        setShowDiscover(!showDiscover);
        setShowCharging(false);
        setShowEnergy(false);
        setShowVehicle(false);
        setShowShop(false);
        setSignin(false);
    }


    // onclick function for mobile screens

    // const [vehicle, setVehicle]=useState(false);

    
    //  const toggleVehicle=()=>{
    //     setVehicle(!false);
    //  }

   

    










    return (
        

        <nav className="relative" >
            <div>
                <p className="flex m-auto w-full items-center fixed z-50 py-2  justify-center text-#171a20 text-[10px] md:text-sm gap-3  bg-gray-200 px-[1rem] ">0% APR avaliable for Model 3 and Model Y. <u>Learn More</u></p>
            </div>

            {/* main navbar */}
            <div className="flex justify-between items-center px-[1rem] md:px-[3rem] mt-[2rem] fixed z-50 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white w-full  bg-opacity-45 backdrop-blur-xl font-bold py-3 ">

               <div className='flex items-center w-full lg:w-fit'>
                    <Link href={'/'}>
                        <Image src="/images/logo.png" width={100} height={100} alt='tesla_logo' className='w-fit'/>
                    </Link>
                    
                    <div onClick={toggleShowMenu} className='ml-auto text-2xl flex lg:hidden '>
                        {showMenu===true? <div className='text-2xl   w-fit'><IoMdClose/>
                        <div className='absolute top-[4.5rem] right-0 text-base bg-white h-screen w-full py-3   '>
                            <ul className='flex flex-col gap-3 items-center'>
                                <Link href={'/'}>
                                    <li className='underline'>Home</li>
                                </Link>
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
                            
                        </div>
                        
                        
                        </div> : <div className='text-2xl  w-fit'><IoMenu /></div>}
                        
                        {/* <IoMdClose/>
                        <IoMenu /> */}

                    </div>
                    
               </div>
               
               
                

                <div className=" relative">
                    <ul className="hidden lg:flex gap-5 text-sm flex-grow ">
                         {/* drop down for vehicle */}
                        <li onClick={toggleShowVehicle} className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer">Vehicles</li>
                        {showVehicle===true ? <div className="bg-white slide-left bg-opacity-85 backdrop-blur-xl h-[60vh] top-[4rem] rounded-lg left-0 absolute w-[50vw] flex py-[1rem] px-[1rem]">

                            <div className="grid grid-cols-3 gap-2">
                                {/* model s */}
                                <div className="w-fit h-fit">
                                    <Link href={'/carmodel'}>
                                        <div>
                                            <img src="/images/msbg.png" width={150} height={150} alt="carImage" className="cursor-pointer"/>
                                        </div>
                                    </Link>

                                    <Link href={'/carmodel'}>
                                        <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">Model S</h1>
                                    </Link>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        <Link href={'/carmodel'}>
                                            <button><u>Learn</u></button>
                                        </Link>
                                        <button><u>Order</u></button>
                                    </div>
                                </div>
                                
                                {/* model 3 */}
                                <div className="w-fit h-fit">
                                    <div>
                                        <img src="/images/m3bg.png" width={150} height={150} alt="carImage" className="cursor-pointer"/>
                                    </div>

                                    <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">Model 3</h1>
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

                                    <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">Model X</h1>
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
                                
                                    <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">Model Y</h1>
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

                                    <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">Model S</h1>
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

                                    <h1 className="text-center mt-8 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">Help Me Choose</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        {/* <button><u>Learn</u></button> */}
                                        <button><u>Get Started</u></button>
                                    </div>
                                </div>

                                
                            </div>


                            <div className="ml-auto py-[1rem]">
                                <ul className="border-l border-neutral-400 px-5 flex flex-col gap-4 font-semibold text-[10px]">
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

                        {/* drop down for energy */}
                        <li onClick={toggleShowEnergy} className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer">Energy</li>
                        {showEnergy===true? <div className="bg-white slide-left bg-opacity-85 backdrop-blur-xl h-[60vh] top-[4rem] rounded-lg left-0 absolute w-[50vw] flex py-[1rem] px-[1rem]">
                            <div className="grid grid-cols-2 gap-2">

                                {/* solar panel */}
                                <div className="w-fit h-fit">
                                    <div>
                                        <img src="/images/sl1.png" width={200} height={200} alt="carImage" className="cursor-pointer"/>
                                    </div>

                                    <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">Solar Panel</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        <button><u>Learn</u></button>
                                        <button><u>Order</u></button>
                                    </div>
                                </div>

                                {/* solar roof */}
                                <div className="w-fit h-fit">
                                    <div>
                                        <img src="/images/sl2.png" width={200} height={200} alt="carImage" className="cursor-pointer"/>
                                    </div>

                                    <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">Solar Roof</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        <button><u>Learn</u></button>
                                        <button><u>Order</u></button>
                                    </div>
                                </div>

                                {/* Powerwall */}
                                <div className="w-fit h-fit ml-5">
                                    <div className="ml-12">
                                        <img src="/images/sl3.png" width={60} height={60} alt="carImage" className="cursor-pointer  "/>
                                    </div>

                                    <h1 className="text-center mt-5 text-black px-12 font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">Powerwall</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        <button><u>Learn</u></button>
                                        <button><u>Order</u></button>
                                    </div>
                                </div>

                                {/* mega pack */}
                                <div className="w-fit h-full pt-3">
                                    <div className="">
                                        <img src="/images/sl4.png" width={150} height={150} alt="carImage" className="cursor-pointer"/>
                                    </div>

                                    <h1 className="text-center mt-5 text-black px-12 font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">Megapack</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        <button><u>Learn</u></button>
                                        <button><u>Order</u></button>
                                    </div>
                                </div>
                            </div>




                            {/* inventory side */}
                            <div className=" py-[1rem]">
                                <ul className="border-l border-neutral-400 px-5 flex flex-col gap-4 font-semibold text-[10px]">
                                    <li className="cursor-pointer">Schedule a Consultation</li>
                                    <li className="cursor-pointer">Why Solar</li>
                                    <li className="cursor-pointer">Incentive</li>
                                    <li className="cursor-pointer">Support</li>
                                    <li className="cursor-pointer">Compare</li>
                                    <li className="cursor-pointer">Partner with Tesla</li>
                                    <li className="cursor-pointer">Commercial</li>
                                    <li className="cursor-pointer">Utilities</li>
                                    
                                </ul>
                            </div>







                        </div> : ""}

                        {/* drop down for charging */}
                        <li onClick={toggleShowCharging} className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer">Charging</li>
                        {showCharging===true? <div className="bg-white slide-left bg-opacity-85 backdrop-blur-xl h-[60vh] top-[4rem] rounded-lg left-0 absolute w-[50vw] flex py-[1rem] px-[1rem]">
                            <div className="flex gap-2 items-center justify-between px-10 w-full m-auto">
                                {/* charging */}
                                <div className="w-fit h-full">
                                    <div>
                                        <img src="/images/c1.png" width={100} height={100} alt="carImage" className="cursor-pointer"/>
                                    </div>

                                    <h1 className="text-center my-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill mt-[4rem]">Charging</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        <button><u>Learn</u></button>
                                    </div>
                                </div>

                                {/* Home Charging */}
                                <div className="w-fit h-fit">
                                    <div className='items-center justify-center flex'>
                                        <img src="/images/c2.png" width={100} height={100} alt="carImage" className="cursor-pointer"/>
                                    </div>

                                    <h1 className="text-center my-5 px-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">Home Charging</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        <button><u>Learn</u></button>
                                        <button><u>Shop</u></button>
                                    </div>
                                </div>

                                {/* Supercharging */}
                                <div className="w-fit h-fit ">
                                    <div className='items-center justify-center flex'>
                                        <img src="/images/c3.png" width={80} height={80} alt="carImage" className="cursor-pointer"/>
                                    </div>

                                    <h1 className="text-center my-5 px-5 mt-8 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">Supercharging</h1>
                                    <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                                        <button><u>Learn</u></button>
                                        <button><u>Find</u></button>
                                    </div>
                                </div>
                            </div>

                             {/* inventory side */}
                             <div className=" ml-auto py-[10px]">
                                <ul className="border-l border-neutral-400 px-5 flex flex-col gap-2 font-semibold text-[10px]">
                                    <li className="cursor-pointer">Help Me Charge</li>
                                    <li className="cursor-pointer">Charging Caculator</li>
                                    <li className="cursor-pointer">Charging With NACS</li>
                                    <li className="cursor-pointer">Supercharger Voting</li>
                                    <li className="cursor-pointer">Host a Supercharger</li>
                                    <li className="cursor-pointer">Commercial Charging</li>
                                    <li className="cursor-pointer">Host Wall Connectors</li>
                                  
                                    
                                </ul>
                            </div>








                        </div> : ""}

                        {/* discover dropdown */}
                        <li onClick={toggleShowDiscover} className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer">Discover</li>
                        {showDiscover===true?<div className="bg-white slide-left bg-opacity-85 backdrop-blur-xl h-[60vh] justify-center top-[4rem] rounded-lg left-0 absolute w-full flex py-[1rem] px-[1rem]">
                                <div className='flex justify-between gap-8 font-semibold text-[12px]'> 
                                    <ul className='flex flex-col gap-5'>
                                        <li className='text-neutral-600'>Resources</li>
                                        <li className='mt-5 cursor-pointer hover:underline'>Demo Drive</li>
                                        <li className='cursor-pointer hover:underline'>Insurance</li>
                                        <li className='cursor-pointer hover:underline'>Military Purchase Program</li>
                                        <li className='cursor-pointer hover:underline'>Video Guides</li>
                                        <li className='cursor-pointer hover:underline'>Customer Stories</li>
                                        <li className='cursor-pointer hover:underline'>Events</li>
                                    </ul>

                                    <ul className='flex flex-col gap-5'>
                                        <li className='text-neutral-600'>Location Services</li>
                                        <li className='mt-5 cursor-pointer hover:underline'>Find Us</li>
                                        <li className='cursor-pointer hover:underline'>Find a Collision Center</li>
                                        <li className='cursor-pointer hover:underline'>Find a Certified Installer</li>
                                    </ul>

                                    <ul className='flex flex-col gap-5'>
                                        <li className='text-neutral-600'>Company</li>
                                        <li className='mt-5 cursor-pointer hover:underline'>About</li>
                                        <li className='cursor-pointer hover:underline'>Careers</li>
                                        <li className='cursor-pointer hover:underline'>Investor Relations</li>
                                    </ul>
                                </div>






                            
                        </div> : ""}


                        {/* Shop dropdown */}
                        <li onClick={toggleShowShop} className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer ">Shop</li>
                        {showShop===true? <div className="bg-white slide-left bg-opacity-85 backdrop-blur-xl h-[60vh] top-[4rem] rounded-lg left-0 absolute w-[50vw] flex py-[1rem] px-[1rem]">
                                <div className='flex justify-center  w-full gap-5'>
                                    {/* charging */}
                                    <div>
                                        <div>
                                            <Image src="/images/c2.png" width={70} height={70} alt="image_charging" className="cursor-pointer m-auto"/>
                                        </div>
                                        <h1 className='mt-8 px-8 hover:bg-black hover:text-white cursor-pointer rounded-full text-sm'>Charging</h1>
                                    </div>

                                    {/* wheel */}
                                    <div>
                                        <div className=''>
                                            <Image src="/images/v1.png" width={110} height={110} alt="image_charging" className="cursor-pointer m-auto "/>
                                        </div>
                                        <h1 className='mt-3 px-8 text-center hover:bg-black hover:text-white cursor-pointer rounded-full text-sm'>Vehicle Accessories</h1>
                                    </div>

                                    {/* cap */}
                                    <div>
                                        <div>
                                            <Image src="/images/v2.png" width={150} height={150} alt="image_charging" className="cursor-pointer"/>
                                        </div>
                                        <h1 className='mt-12 px-8 hover:bg-black hover:text-white text-center cursor-pointer rounded-full text-sm'>Apparel</h1>
                                    </div>

                                    {/* bag */}
                                    <div>
                                        <div>
                                            <Image src="/images/v3.png" width={90} height={90} alt="image_charging" className="cursor-pointer m-auto"/>
                                        </div>
                                        <h1  className='px-8 hover:bg-black hover:text-white cursor-pointer rounded-full text-sm'>Lifestyle</h1>
                                    </div>
                                </div>










                        </div> : ""}





                        <li className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer">We, Robot</li>
                    </ul>
                </div>

                <div className="hidden lg:flex  text-xl ">
                    <p className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer"><BsQuestionCircle /></p>
                    <p className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer"><TbWorld /></p>

                    <Link href={'/login'}>
                        <p className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer"><FaRegUserCircle /></p>
                    </Link>

                </div>

                {/* toggle menu drop down for phone screen */}
                {/* <div onClick={toggleShowMenu} className="lg:hidden ">
                    {showMenu===true?
                    
                    <div className="text-2xl bg-neutral-300 text-black p-1 rounded-full "><IoMdClose />
                    <div className="absolute left-0 top-[4rem] h-screen w-[100vw] bg-neutral-200 ">
                        <ul className="flex flex-col gap-4 text-center py-5 text-base">
                            <Link href={'/'}>
                                <li className="hover:text-blue-600 cursor-pointer font-bold"><u>Home</u></li>
                            </Link>
                            <li onClick={toggleVehicle}>Vehicle
                                {vehicle===true? <div className='bg-red-500'>vehicle is true</div> : <div></div>}

                                








                            </li>




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
                
                </div> */}





            </div>
        </nav>
    )



};

export default Navbar;

