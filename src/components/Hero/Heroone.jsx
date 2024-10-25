'use client'

import Link from "next/link"
import React from "react"
import Image from "next/image"

const Heroone=()=>{
    return(
        <main>
           {/* Model Y */}
            <div className="bg-cover bg-center bg-no-repeat h-screen rounded-lg mx-[1rem] md:mx-[2rem] lg:mx-[3rem] mt-[2rem] " style={{ backgroundImage: "url('/images/my1.jpg')" }}>
                <div className=" items-center flex flex-col w-full pt-5">
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-[2rem] lg:text-[3rem] text-neutral-500 font-bold ">Model Y</p>
                        <u className="text-sm lg:text-[1rem] text-neutral-600 font-bold">0% ARP Avaliable</u>
                        <p className="text-sm lg:text-[1rem] text-neutral-600 font-bold">Lease Starting at $349/mo</p>
                    </div>


                    <div className="pt-72 lg:pt-[20rem] xl:pt-[24rem] md:block  gap-2  m-auto flex flex-col">
                        <button className="bg-blue-600 text-white font-semibold mt-2 text-[10px] py-2 px-16 rounded-[8px] ml-6">Order Now</button>
                        <button className="bg-white text-neutral-600 mt-2 font-semibold text-[10px] py-2 px-16 rounded-[8px] ml-6">Demo Drive</button>
                    </div>
                </div>
            </div>

            {/* Model 3 */}
            <div className="bg-cover bg-center bg-no-repeat h-screen rounded-lg mx-[1rem] md:mx-[2rem] lg:mx-[3rem] mt-[2rem] " style={{ backgroundImage: "url('/images/m3a.jpg')" }}>
            <div className=" items-center flex flex-col w-full pt-5">
                <div className="flex flex-col items-center gap-3">
                    <p className="text-[2rem] lg:text-[3rem] text-white font-bold ">Model 3</p>
                    <u className="text-sm lg:text-[1rem] text-white font-bold">0% ARP Avaliable</u>
                    <p className="text-sm lg:text-[1rem] text-white font-bold">Lease Starting at $349/mo</p>
                </div>


                <div className="pt-72 lg:pt-[20rem] xl:pt-[25rem] md:block  gap-2  m-auto flex flex-col">
                    <button className="bg-blue-600 text-white font-semibold mt-2 text-[10px] py-2 px-16 rounded-[8px] ml-6">Order Now</button>
                    <button className="bg-white text-neutral-600 mt-2 font-semibold text-[10px] py-2 px-16 rounded-[8px] ml-6">Experience Model 3</button>
                </div>
            </div>
            </div>

            {/* Model X */}
            <div className="bg-cover bg-center bg-no-repeat h-screen rounded-lg mx-[1rem] md:mx-[2rem] lg:mx-[3rem] mt-[2rem] " style={{ backgroundImage: "url('/images/mx.jpg')" }}>
                <div className=" items-center flex flex-col w-full pt-5">
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-[2rem] lg:text-[3rem] text-black font-bold ">Model x</p>
                        <p className="text-sm lg:text-[1rem] text-black font-bold ">From $65,990</p>
                        <u className="text-sm lg:text-[1rem] text-black font-bold">After Federal Taxx Credit $7,500</u>
                        <u className="text-sm lg:text-[1rem] text-black font-bold">and Est. Gas Saving $6,500</u>
                    </div>


                    <div className="pt-72 lg:pt-[19rem] xl:pt-[24rem]  md:block  gap-2  m-auto flex flex-col">
                        <button className="bg-blue-600 text-white font-semibold mt-2 text-[10px] py-2 px-16 rounded-[8px] ml-6">Order Now</button>
                        <button className="bg-white text-neutral-600 mt-2 font-semibold text-[10px] py-2 px-16 rounded-[8px] ml-6">Demo Drive</button>
                    </div>
                </div>
            </div>

            {/* Model S */}
            <div className="bg-cover bg-center bg-no-repeat h-screen rounded-lg mx-[1rem] md:mx-[2rem] lg:mx-[3rem] mt-[2rem] " style={{ backgroundImage: "url('/images/ms.jpg')" }}>
                <div className=" items-center flex flex-col w-full pt-5">
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-[2rem] lg:text-[3rem] text-black font-bold ">Model S</p>
                        <p className="text-sm lg:text-[1rem] text-black font-bold">From $68,490</p>
                        <u className="text-sm lg:text-[1rem] text-black font-bold">After Est. Gas Saving $6,500</u>
                    </div>


                    <div className="md:pt-[20rem] lg:pt-[21rem] xl:pt-[26rem] pt-72 md:block  gap-2  m-auto flex flex-col">
                        <button className="bg-blue-600 text-white font-semibold mt-2 text-[10px] py-2 px-16 rounded-[8px] ml-6">Order Now</button>
                        <button className="bg-white text-neutral-600 mt-2 font-semibold text-[10px] py-2 px-16 rounded-[8px] ml-6">Demo Drive</button>
                    </div>
                </div>
            </div>

            {/* Cyber Truck */}
            <div className="bg-cover bg-center bg-no-repeat h-screen rounded-lg mx-[1rem] md:mx-[2rem] lg:mx-[3rem] mt-[2rem] " style={{ backgroundImage: "url('/images/ct.jpg')" }}>
                <div className=" items-center flex flex-col w-full pt-5">
                    <div className="pt-8">
                        <img src="/images/cyberbg.png" width={300} height={300} alt="image"/>
                        {/* <p className="text-sm lg:text-[1rem] text-black font-bold">From $68,490</p>
                        <u className="text-sm lg:text-[1rem] text-black font-bold">After Est. Gas Saving $6,500</u> */}
                    </div>


                    <div className="md:pt-[20rem] lg:pt-[21rem] xl:pt-[26rem] pt-72 md:block  gap-2  m-auto flex flex-col">
                        <button className="bg-zinc-900 text-neutral-400 font-semibold mt-2 text-[10px] py-2 px-16  ml-6">Order Now</button>
                        <button className="bg-zinc-900 text-neutral-400 mt-2 font-semibold text-[10px] py-2 px-16  ml-6">Demo Drive</button>
                    </div>
                </div>
            </div>
            
        </main>

        
    )


};

export default Heroone;