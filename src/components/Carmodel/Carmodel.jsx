"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';



const Carmodel = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation triggers only once on scroll
    });
  }, []);

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
        setSignin(false)
    }

    const toggleShowVehicle=()=>{
        setShowVehicle(!showVehicle)
        setShowEnergy(false)
        setShowCharging(false)
        setShowDiscover(false)
        setShowShop(false) 
        setSignin(false) 
    }

    const toggleShowEnergy=()=>{
        setShowEnergy(!showEnergy)
        setShowVehicle(false)
        setShowCharging(false)
        setShowDiscover(false)
        setShowShop(false)
        setSignin(false)
    }

    const toggleShowCharging=()=>{
        setShowCharging(!showCharging)
        setShowVehicle(false)
        setShowEnergy(false)
        setShowDiscover(false)
        setShowShop(false)
        setSignin(false)
    }

    const toggleShowDiscover=()=>{
        setShowDiscover(!showDiscover)
        setShowCharging(false)
        setShowEnergy(false)
        setShowVehicle(false)
        setShowShop(false)
        setSignin(false)
    }




    



  return (
    <>
      <div>
        <div className="bg-cover bg-center bg-no-repeat h-[100vh]    " style={{ backgroundImage: "url('/images/models1.jpg')" }}>


            {/* navbar */}
            <nav className="flex justify-between items-center px-[1rem] md:px-[3rem] fixed z-50 py-4 w-full   font-bold shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white bg-opacity-45 backdrop-blur-xl">
          <Link href={"/"}>
            <div>
              <img
                src="/images/logo.png "
                width={120}
                height={120}
                alt="image"
              />
            </div>
          </Link>

          <div className=" relative">
            <ul className="hidden lg:flex gap-5 text-sm flex-grow ">
              {/* drop down for vehicle */}
              <li
                onClick={toggleShowVehicle}
                className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer"
              >
                Vehicles
              </li>
              {showVehicle === true ? (
                <div className="bg-white slide-left bg-opacity-85 backdrop-blur-xl h-[60vh] top-[4rem] rounded-lg left-0 absolute w-[50vw] flex py-[1rem] px-[1rem]">
                  <div className="grid grid-cols-3 gap-2">
                    {/* model s */}
                    <div className="w-fit h-fit">
                      <Link href={"/vehicle"}>
                        <div>
                          <img
                            src="/images/msbg.png"
                            width={150}
                            height={150}
                            alt="carImage"
                            className="cursor-pointer"
                          />
                        </div>
                      </Link>

                      <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">
                        Model S
                      </h1>
                      <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                        <Link href={"/vehicle"}>
                          <button>
                            <u>Learn</u>
                          </button>
                        </Link>
                        <button>
                          <u>Order</u>
                        </button>
                      </div>
                    </div>

                    {/* model 3 */}
                    <div className="w-fit h-fit">
                      <div>
                        <img
                          src="/images/m3bg.png"
                          width={150}
                          height={150}
                          alt="carImage"
                          className="cursor-pointer"
                        />
                      </div>

                      <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">
                        Model 3
                      </h1>
                      <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                        <button>
                          <u>Learn</u>
                        </button>
                        <button>
                          <u>Order</u>
                        </button>
                      </div>
                    </div>

                    {/* model x */}
                    <div className="w-fit h-fit">
                      <div>
                        <img
                          src="/images/msbg.png"
                          width={150}
                          height={150}
                          alt="carImage"
                          className="cursor-pointer"
                        />
                      </div>

                      <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">
                        Model X
                      </h1>
                      <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                        <button>
                          <u>Learn</u>
                        </button>
                        <button>
                          <u>Order</u>
                        </button>
                      </div>
                    </div>

                    {/* model y */}
                    <div className="w-fit h-fit">
                      <div>
                        <img
                          src="/images/blue.png"
                          width={150}
                          height={150}
                          alt="carImage"
                          className="cursor-pointer"
                        />
                      </div>

                      <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">
                        Model Y
                      </h1>
                      <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                        <button>
                          <u>Learn</u>
                        </button>
                        <button>
                          <u>Order</u>
                        </button>
                      </div>
                    </div>

                    {/* cybertruck */}
                    <div className="w-fit h-fit">
                      <div>
                        <img
                          src="/images/cyber.png"
                          width={150}
                          height={150}
                          alt="carImage"
                          className="cursor-pointer"
                        />
                      </div>

                      <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">
                        Model S
                      </h1>
                      <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                        <button>
                          <u>Learn</u>
                        </button>
                        <button>
                          <u>Order</u>
                        </button>
                      </div>
                    </div>

                    {/* help me choose */}
                    <div className="w-fit h-fit">
                      <div>
                        <img
                          src="/images/black.png"
                          width={150}
                          height={150}
                          alt="carImage"
                          className="cursor-pointer"
                        />
                      </div>

                      <h1 className="text-center mt-8 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">
                        Help Me Choose
                      </h1>
                      <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                        {/* <button><u>Learn</u></button> */}
                        <button>
                          <u>Get Started</u>
                        </button>
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
                </div>
              ) : (
                ""
              )}

              {/* drop down for energy */}
              <li
                onClick={toggleShowEnergy}
                className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer"
              >
                Energy
              </li>
              {showEnergy === true ? (
                <div className="bg-white slide-left bg-opacity-85 backdrop-blur-xl h-[60vh] top-[4rem] rounded-lg left-0 absolute w-[50vw] flex py-[1rem] px-[1rem]">
                  <div className="grid grid-cols-2 gap-2">
                    {/* solar panel */}
                    <div className="w-fit h-fit">
                      <div>
                        <img
                          src="/images/sl1.png"
                          width={200}
                          height={200}
                          alt="carImage"
                          className="cursor-pointer"
                        />
                      </div>

                      <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">
                        Solar Panel
                      </h1>
                      <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                        <button>
                          <u>Learn</u>
                        </button>
                        <button>
                          <u>Order</u>
                        </button>
                      </div>
                    </div>

                    {/* solar roof */}
                    <div className="w-fit h-fit">
                      <div>
                        <img
                          src="/images/sl2.png"
                          width={200}
                          height={200}
                          alt="carImage"
                          className="cursor-pointer"
                        />
                      </div>

                      <h1 className="text-center mt-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">
                        Solar Roof
                      </h1>
                      <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                        <button>
                          <u>Learn</u>
                        </button>
                        <button>
                          <u>Order</u>
                        </button>
                      </div>
                    </div>

                    {/* Powerwall */}
                    <div className="w-fit h-fit ml-5">
                      <div className="ml-12">
                        <img
                          src="/images/sl3.png"
                          width={60}
                          height={60}
                          alt="carImage"
                          className="cursor-pointer  "
                        />
                      </div>

                      <h1 className="text-center mt-5 text-black px-12 font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">
                        Powerwall
                      </h1>
                      <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                        <button>
                          <u>Learn</u>
                        </button>
                        <button>
                          <u>Order</u>
                        </button>
                      </div>
                    </div>

                    {/* mega pack */}
                    <div className="w-fit h-full pt-3">
                      <div className="">
                        <img
                          src="/images/sl4.png"
                          width={150}
                          height={150}
                          alt="carImage"
                          className="cursor-pointer"
                        />
                      </div>

                      <h1 className="text-center mt-5 text-black px-12 font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">
                        Megapack
                      </h1>
                      <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                        <button>
                          <u>Learn</u>
                        </button>
                        <button>
                          <u>Order</u>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* inventory side */}
                  <div className=" py-[1rem]">
                    <ul className="border-l border-neutral-400 px-5 flex flex-col gap-4 font-semibold text-[10px]">
                      <li className="cursor-pointer">
                        Schedule a Consultation
                      </li>
                      <li className="cursor-pointer">Why Solar</li>
                      <li className="cursor-pointer">Incentive</li>
                      <li className="cursor-pointer">Support</li>
                      <li className="cursor-pointer">Compare</li>
                      <li className="cursor-pointer">Partner with Tesla</li>
                      <li className="cursor-pointer">Commercial</li>
                      <li className="cursor-pointer">Utilities</li>
                    </ul>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* drop down for charging */}
              <li
                onClick={toggleShowCharging}
                className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer"
              >
                Charging
              </li>
              {showCharging === true ? (
                <div className="bg-white slide-left bg-opacity-85 backdrop-blur-xl h-[60vh] top-[4rem] rounded-lg left-0 absolute w-[50vw] flex py-[1rem] px-[1rem]">
                  <div className="flex gap-2 items-center justify-between px-10 w-full m-auto">
                    {/* charging */}
                    <div className="w-fit h-full">
                      <div>
                        <img
                          src="/images/c1.png"
                          width={100}
                          height={100}
                          alt="carImage"
                          className="cursor-pointer"
                        />
                      </div>

                      <h1 className="text-center my-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill mt-[4rem]">
                        Charging
                      </h1>
                      <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                        <button>
                          <u>Learn</u>
                        </button>
                      </div>
                    </div>

                    {/* Home Charging */}
                    <div className="w-fit h-fit">
                      <div className="items-center justify-center flex">
                        <img
                          src="/images/c2.png"
                          width={100}
                          height={100}
                          alt="carImage"
                          className="cursor-pointer"
                        />
                      </div>

                      <h1 className="text-center my-5 px-5 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">
                        Home Charging
                      </h1>
                      <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                        <button>
                          <u>Learn</u>
                        </button>
                        <button>
                          <u>Shop</u>
                        </button>
                      </div>
                    </div>

                    {/* Supercharging */}
                    <div className="w-fit h-fit ">
                      <div className="items-center justify-center flex">
                        <img
                          src="/images/c3.png"
                          width={80}
                          height={80}
                          alt="carImage"
                          className="cursor-pointer"
                        />
                      </div>

                      <h1 className="text-center my-5 px-5 mt-8 text-black font-bold hover:text-white hover:bg-black rounded-full cursor-pointer  w-fill">
                        Supercharging
                      </h1>
                      <div className="flex gap-3 justify-center pt-3 text-[12px] text-neutral-700">
                        <button>
                          <u>Learn</u>
                        </button>
                        <button>
                          <u>Find</u>
                        </button>
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
                </div>
              ) : (
                ""
              )}

              {/* discover dropdown */}
              <li
                onClick={toggleShowDiscover}
                className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer"
              >
                Discover
              </li>
              {showDiscover === true ? (
                <div className="bg-white slide-left bg-opacity-85 backdrop-blur-xl h-[60vh] justify-center top-[4rem] rounded-lg left-0 absolute w-full flex py-[1rem] px-[1rem]">
                  <div className="flex justify-between gap-8 font-semibold text-[12px]">
                    <ul className="flex flex-col gap-5">
                      <li className="text-neutral-600">Resources</li>
                      <li className="mt-5 cursor-pointer hover:underline">
                        Demo Drive
                      </li>
                      <li className="cursor-pointer hover:underline">
                        Insurance
                      </li>
                      <li className="cursor-pointer hover:underline">
                        Military Purchase Program
                      </li>
                      <li className="cursor-pointer hover:underline">
                        Video Guides
                      </li>
                      <li className="cursor-pointer hover:underline">
                        Customer Stories
                      </li>
                      <li className="cursor-pointer hover:underline">Events</li>
                    </ul>

                    <ul className="flex flex-col gap-5">
                      <li className="text-neutral-600">Location Services</li>
                      <li className="mt-5 cursor-pointer hover:underline">
                        Find Us
                      </li>
                      <li className="cursor-pointer hover:underline">
                        Find a Collision Center
                      </li>
                      <li className="cursor-pointer hover:underline">
                        Find a Certified Installer
                      </li>
                    </ul>

                    <ul className="flex flex-col gap-5">
                      <li className="text-neutral-600">Company</li>
                      <li className="mt-5 cursor-pointer hover:underline">
                        About
                      </li>
                      <li className="cursor-pointer hover:underline">
                        Careers
                      </li>
                      <li className="cursor-pointer hover:underline">
                        Investor Relations
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* Shop dropdown */}
              <li
                onClick={toggleShowShop}
                className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer "
              >
                Shop
              </li>
              {showShop === true ? (
                <div className="bg-white slide-left bg-opacity-85 backdrop-blur-xl h-[60vh] top-[4rem] rounded-lg left-0 absolute w-[50vw] flex py-[1rem] px-[1rem]">
                  <div className="flex justify-center  w-full gap-5">
                    {/* charging */}
                    <div>
                      <div>
                        <Image
                          src="/images/c2.png"
                          width={70}
                          height={70}
                          alt="image_charging"
                          className="cursor-pointer m-auto"
                        />
                      </div>
                      <h1 className="mt-8 px-8 hover:bg-black hover:text-white cursor-pointer rounded-full text-sm">
                        Charging
                      </h1>
                    </div>

                    {/* wheel */}
                    <div>
                      <div className="">
                        <Image
                          src="/images/v1.png"
                          width={110}
                          height={110}
                          alt="image_charging"
                          className="cursor-pointer m-auto "
                        />
                      </div>
                      <h1 className="mt-3 px-8 text-center hover:bg-black hover:text-white cursor-pointer rounded-full text-sm">
                        Vehicle Accessories
                      </h1>
                    </div>

                    {/* cap */}
                    <div>
                      <div>
                        <Image
                          src="/images/v2.png"
                          width={150}
                          height={150}
                          alt="image_charging"
                          className="cursor-pointer"
                        />
                      </div>
                      <h1 className="mt-12 px-8 hover:bg-black hover:text-white text-center cursor-pointer rounded-full text-sm">
                        Apparel
                      </h1>
                    </div>

                    {/* bag */}
                    <div>
                      <div>
                        <Image
                          src="/images/v3.png"
                          width={90}
                          height={90}
                          alt="image_charging"
                          className="cursor-pointer m-auto"
                        />
                      </div>
                      <h1 className="px-8 hover:bg-black hover:text-white cursor-pointer rounded-full text-sm">
                        Lifestyle
                      </h1>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <li className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer">
                We, Robot
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex  text-xl ">
            <p className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer">
              <BsQuestionCircle />
            </p>
            <p className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer">
              <TbWorld />
            </p>

            <Link href={"/login"}>
              <p className="hover:bg-black hover:text-white px-3 py-2 rounded-lg cursor-pointer">
                <FaRegUserCircle />
              </p>
            </Link>
          </div>

          {/* toggle menu drop down */}
          <div onClick={toggleShowMenu} className="lg:hidden ">
            {showMenu === true ? (
              <div className="text-2xl hover:bg-neutral-300 text-black rounded-full p-1">
                <IoMdClose />
                <div className="absolute left-0 top-[7rem] h-screen w-[100vw] bg-white ">
                  <ul className="flex flex-col gap-2 text-center text-base">
                    <li className="hover:text-blue-600 cursor-pointer font-bold">
                      <u>Home</u>
                    </li>
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
              </div>
            ) : (
              <p className="px-4 py-1 bg-neutral-300 rounded-[6px] font-semibold cursor pointer text-sm;">
                Menu
              </p>
            )}
          </div>
            </nav>


            {/* body */}
            <div className="flex flex-col m-auto justify-center text-center pt-20">
                <h1 className="text-6xl text-white font-bold">Model S</h1>
                <p className="pt-[0.5rem] text-white text-3xl font-bold">From $68,490<sup className="text-sm">1</sup></p>
                <u className="pt-[0.5rem] text-white text-base font-bold cursor-pointer">After Est. Gas Saving $6,500</u>

                <ul className="flex m-auto justify-center text-xl text-white font-bold mt-[14rem] gap-[5rem]">
                    <li>348 mi</li>
                    <li>1.99s</li>
                    <li>200 mph</li>
                    <li>1,020 hp</li>
                </ul>

                <ul className="flex m-auto justify-center gap-24 pt-[4px] text-white text-[12px] font-bold cursor-pointer">
                    <li>Range (EPA est.)</li>
                    <li>0-60 mph<sup>2</sup></li>
                    <li>Top Speed<sup>3</sup></li>
                    <li>Peak Power</li>
                </ul>

                <div className="gap-5 l flex m-auto py-[1rem]">
                    <button className="bg-blue-600 text-white font-semibold  text-[10px] py-2 px-16 rounded-[8px] ">Order Now</button>
                    <button className="bg-white text-neutral-600  font-semibold text-[10px] py-2 px-16 rounded-[8px] ">Demo Drive</button>
                </div>

                <p className="text-[12px] text-neutral-200 mb-2">Specs displayd are Model S Plaid values.</p>
            </div>

            <div className="bg-black h-[20vh] w-full m-auto items-center justify-center flex " >
              <h3 className="text-white text-2xl ">Interior of the Future</h3>
            </div>

            {/* empty section with interior as bg */}
            <div className="bg-cover bg-center bg-no-repeat h-[100vh] " style={{ backgroundImage: "url('/images/models2.jpg')" }}>
            </div>


           
            {/* swiper js */}
            <div className="bg-black h-[40vh] w-full">
                <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Navigation,]}
        className="mySwiper "
      >
        <SwiperSlide>    
          <Image src='/images/slide1.jpg' width={500} height={500} alt="image_slide"/> 
        </SwiperSlide>


        <SwiperSlide> 
          <Image src='/images/slide2.jpg' width={500} height={500} alt="image_slide"/>  
        </SwiperSlide>


        <SwiperSlide> 
          <Image src='/images/slide3.jpg' width={500} height={500} alt="image_slide"/>  
        </SwiperSlide>


        <SwiperSlide>
          <Image src='/images/slide4.jpg' width={500} height={500} alt="image_slide"/> 
        </SwiperSlide>


        <SwiperSlide> 
          <Image src='/images/slide5.jpg' width={500} height={500} alt="image_slide"/> 
        </SwiperSlide>

        <SwiperSlide> 
          <Image src='/images/slide6.jpg' width={500} height={500} alt="image_slide"/> 
        </SwiperSlide>


        </Swiper> 
        </div>

          {/* div n pic */}
          <div className="bg-black pt-40 px-[12rem]  flex text-white">
            <div>
              <Image src="/images/dashb.jpg" width={700} height={700} alt="tesla_image"/>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" className="pl-20 flex flex-col gap-4 justify-center">
              <h3 className="font-bold">Stay Connected</h3>
              <p className="text-sm">Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
            </div>
          </div>

          {/* div n pic2 */}
          <div className="bg-black  px-[12rem]  flex text-white">
            <div className="pr-20 flex flex-col gap-4 justify-center">
              <h3 className="font-bold">Stay Connected</h3>
              <p className="text-sm">A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
            </div>

            <div className="">
              <Image src="/images/models77.jpg" width={700} height={700} alt="tesla_image"/>
            </div>

          </div>

          {/* div3 */}
          <div className="bg-black  px-[12rem]  flex text-white">
            <div>
              <Image src="/images/slide3.jpg" width={700} height={700} alt="tesla_image"/>
            </div>

            <div className="pl-20  flex flex-col gap-4 justify-center">
              <h3 className="font-bold">Stay Connected</h3>
              <p className="text-sm">With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.</p>
              <button><u className="hover:text-stone-500">Compare Modles</u></button>
            </div>
          </div>


          {/* sport div blue */}
          <div className="bg-cover bg-center bg-no-repeat h-[60vh]  " style={{ backgroundImage: "url('/images/teslab.jpg')" }}>
          <div className="flex flex-col m-auto justify-center text-center pt-20">
                

                <ul className="flex m-auto justify-center text-xl text-white font-bold mt-[10rem] gap-[5rem]">
                    <li>348 mi</li>
                    <li>1.99s</li>
                    <li>200 mph</li>
                    <li>1,020 hp</li>
                </ul>

                <ul className="flex m-auto justify-center gap-24 pt-[4px] text-white text-[12px] font-bold cursor-pointer">
                    <li>Range (EPA est.)</li>
                    <li>0-60 mph<sup>2</sup></li>
                    <li>Top Speed<sup>3</sup></li>
                    <li>Peak Power</li>
                </ul>

                <div className="gap-5 l flex m-auto py-[1rem]">
                    <button className="bg-blue-600 text-white font-semibold  text-[10px] py-2 px-16 rounded-[8px] ">Order Now</button>
                    <button className="bg-white text-neutral-600  font-semibold text-[10px] py-2 px-16 rounded-[8px] ">Demo Drive</button>
                </div>

                <p className="text-[12px] text-neutral-200 mb-2">Specs displayd are Model S Plaid values.</p>
            </div>


          </div>

          {/* lorem div */}
          <div className="flex px-[8rem] py-[3rem] gap-10 ">
            <div className="flex flex-col gap-4">
              <h2 className="text-sm font-semibold">Plaid</h2>
              <h1 className="font-bold text-black text-xl">Beyond Ludicrous</h1>
               <div className="flex flex-col gap-5">
                <button className=" ring ring-black py-1 px-8 font-semi-bold ">Order Now</button>
                <button className=" py-2 px-8 bg-neutral-200 font-semibold">Compare Models</button>
               </div>

            </div>



            <div className=" text-sm ml-auto flex items-center  ">
              <p>Model S Plaid has the quickest acceleration of any vehicle in production. <br /> Updated battery  architecture for all Model S trims enables back-to-back <br /> track runs without performance  degradation. <u className="cursor-pointer">Chat with a Tesla Advisor</u> <br /> to learn more about Model S or <u className="cursor-pointer">schedule a demo driv</u>e today.</p>
            </div>
          </div>


          {/* Electric Powertrain */}
          <div className="bg-neutral-200">
            <div className="w-fit mx-[8rem] pt-32 ">
              <h1 className="mb-8 text-xl font-bold">Electric Powertrain</h1>
              <p className=" text-sm">Model S platforms unite powertrain and battery technologies for unrivaled performance, range <br /> and efficiency. New module and pack thermal architecture allows faster charging and gives you more power <br /> and endurance in all conditions.</p>
            </div>

            <div className="flex m-auto justify-center  mt-16 mx-[3rem] bg-white py-20">
              <Image src="/images/eng1.png" width={700} height={700} alt="image_powertrain" className="mx-[20rem]"/>
            </div>
          </div>

          {/* Model S / Model S Plaid */}

          <div className="flex bg-neutral-200 w-full px-[8rem] gap-20 pt-12 pb-20 ">
         
            {/* div A */}
            <div className=" cursor-pointer text-neutral-600 hover:text-black ">
              <h1 className=" font-bold">Model S</h1>
              <p className="text-sm py-3 ">Dual Motor All-Wheel Drive unlocks more range than any other <br /> vehicle in  our current lineup, with insane power and maxiumu control.</p>

              <div className="flex gap-5 font-bold ">
                <div className="">
                  <h1 className="text-lg">3.1 s</h1>
                  <p  className="text-[12px]">0-60 mph</p>
                </div>

                <div className="">
                  <h1 className="text-lg">402 mi</h1>
                  <p className="text-[12px]">Range (EPA est.)</p>
                </div>

                <div className="">
                  <h1 className="text-lg">670 hp</h1>
                  <p className="text-[12px]">Peak Power</p>
                </div>

              </div>
            </div>



            {/* div B */}
            <div className="text-neutral-600 hover:text-black cursor-pointer">
              <h1 className=" font-bold">Model S Plaid</h1>
              <p className="text-sm py-3">Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel <br /> Drive, featuring torque vectoring and three independent carbon-sleeved rotors.</p>

              <div className="flex gap-5 font-bold">
                <div>
                  <h1 className="text-lg">1.99 s</h1>
                  <p className="text-[12px]">0-60 mph <sup>s</sup></p>
                </div>

                <div>
                  <h1 className="text-lg">348 mi</h1>
                  <p className="text-[12px]">Range (EPA est.)</p>
                </div>

                <div>
                  <h1 className="text-lg">1,020 hp</h1>
                  <p className="text-[12px]">Peak Power</p>
                </div>
              </div>
            </div>
          </div>

          {/* red tesla areodynamic */}
          <div className="bg-cover bg-center bg-no-repeat h-[70vh]  " style={{ backgroundImage: "url('/images/msbb.png')" }}></div>

          {/* designed for efficiency */}
          <div className="flex px-[8rem] py-[3rem] gap-10 bg-black">
            <div className="flex flex-col gap-4">
              <h2 className="text-sm font-semibold text-white ">Plaid</h2>
              <h1 className="font-bold text-white text-xl">Beyond Ludicrous</h1>
               <div className="flex flex-col gap-5">
                <button className=" ring ring-white py-1 px-8 text-base font-semibold text-white ">Order Now</button>
                <button className=" py-2 px-8 bg-neutral-600 text-base font-semibold text-white">Demo Drive</button>
               </div>

            </div>



            <div className=" text-sm ml-auto  text-white  ">
              <p>Model S Plaid has the quickest acceleration of any vehicle in production. <br /> Updated battery  architecture for all Model S trims enables back-to-back <br /> track runs without performance  degradation. <u className="cursor-pointer">Chat with a Tesla Advisor</u> <br /> to learn more about Model S or <u className="cursor-pointer">schedule a demo driv</u>e today.</p>
            </div>
          </div>

          {/* black & red 1 */}
          <div className="flex bg-black text-white pt-28 px-[8rem]">
            <div className="flex flex-col justify-center pr-12">
              <h3 className="text-sm pb-4">Relentless Performance</h3>
              <p className="text-sm">Staggered, performance wheels and tires keep the vehicle <br /> planted and help transfer maximum power down to the road.</p>
            </div>

            <div>
            <Image src="/images/teslamodelsv.jpg" width={400} height={400} alt="tesla_image"/>
            </div>
          </div>

          {/* black & red 2 */}
          <div className="flex bg-black text-white  px-[8rem]">

            <div>
              <Image src="/images/models77b.jpg" width={400} height={400} alt="tesla_image"/>
            </div>

            <div className="flex flex-col justify-center pl-12">
              <h3 className="text-sm pb-4">Optimized Aerodynamics</h3>
              <p className="text-sm">Attention to detail on all exterior surfaces makes Model S the most <br /> aerodynamic production car on Earth.</p>
            </div>
          </div>

          {/* black & red 3 */}
          <div className="flex bg-black text-white pt-28 px-[8rem]">
            <div className="flex flex-col justify-center pr-12">
              <h3 className="text-sm pb-4">Refined Styling</h3>
              <p className="text-sm">An iconic silhouette meets refreshed, elegant proportions.</p>
            </div>

            <div>
              <Image src="/images/models77.jpg" width={400} height={400} alt="tesla_image"/>
            </div>
          </div>

          

          








      </div>
      </div>
    </>
  );
};

export default Carmodel;
