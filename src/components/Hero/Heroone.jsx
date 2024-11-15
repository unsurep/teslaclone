'use client'

import Link from "next/link"
import React from "react"
import Image from "next/image"

const Heroone=()=>{
    return(
        <main>
           {/* Model Y */}
            <div className="bg-cover bg-center bg-no-repeat h-[100vh] pt-32 md:pt-36" style={{ backgroundImage: "url('/images/x1.jpg')" }}>
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-col items-center gap-1 w-full">
                        <p className="text-[3rem] lg:text-[4rem] text-white font-extrabold ">Model Y</p>
                        <u className="text-[2rem] lg:text-[1rem] md:hidden text-white font-bold">0% ARP <br /> Avaliable</u>
                        <u className="text-[2rem] lg:text-[2rem] hidden md:block text-white font-bold">0% ARP  Avaliable</u>
                        <p className="text-[1rem] lg:text-[1rem] text-white font-bold">Lease Starting at $349/mo</p>
                    </div>


                    <div className="pt-[3rem] md:pt-[8rem] lg:pt-[17rem] xl:pt-[11rem] justify-center gap-4 flex w-full items-center">
                        <button className="bg-blue-600 text-white font-semibold  text-[10px] py-2 px-8 rounded-[8px] ">Order Now</button>
                        <button className="bg-white text-neutral-600 font-semibold text-[10px] py-2 px-8 rounded-[8px] ">Demo Drive</button>
                    </div>
                </div>
            </div>
            

            {/* Model 3 */}
            <div className="bg-cover bg-center bg-no-repeat h-[100vh]" style={{ backgroundImage: "url('/images/m3a.jpg')" }}>
            <div className=" items-center justify-center flex flex-col w-full pt-16">
                <div className="flex flex-col items-center gap-1 w-full">
                    <p className="text-[3rem] lg:text-[4rem] text-white font-extrabold">Model 3</p>
                    <u className="text-[2rem] lg:text-[1rem] md:hidden text-white font-bold">0% ARP <br /> Avaliable</u>
                    <u className="text-[2rem] lg:text-[2rem] hidden md:block text-white font-bold">0% ARP  Avaliable</u>
                    <p className="text-[1rem] lg:text-[1rem] text-white font-bold">Lease Starting at $349/mo</p>
                </div>


                <div className="pt-[3rem] md:pt-[8rem] lg:pt-[17rem] xl:pt-[11rem] justify-center gap-4 flex w-full items-center">
                    <button className="bg-blue-600 text-white font-semibold  text-[10px] py-2 px-8 rounded-[8px] ">Order Now</button>
                    <button className="bg-white text-neutral-600 font-semibold text-[10px] py-2 px-8 rounded-[8px] ">Demo Drive</button>
                </div>
            </div>
            </div>

            {/* Model X */}
            <div className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: "url('/images/xxx.jpg')" }}>
                <div className=" items-center justify-center flex flex-col w-full pt-16">
                    <div className="flex flex-col items-center gap-1 w-full">
                        <p className="text-[3rem] md lg:text-[4rem] text-white font-extrabold">Model X</p>
                        <p className="text-[2rem] lg:text-[rem] text-white font-extrabold">From $65,990</p>
                        <u className="text-sm lg:text-[1rem] text-white font-bold">After Federal Taxx Credit $7,500</u>
                        <u className="text-sm lg:text-[1rem] text-white font-bold">and Est. Gas Saving $6,500</u>
                    </div>


                    <div className="pt-[3rem] md:pt-[8rem] lg:pt-[17rem] xl:pt-[11rem] justify-center gap-4 flex w-full items-center">
                        <button className="bg-blue-600 text-white font-semibold  text-[10px] py-2 px-8 rounded-[8px] ">Order Now</button>
                        <button className="bg-white text-neutral-600 font-semibold text-[10px] py-2 px-8 rounded-[8px] ">Demo Drive</button>
                    </div>
                </div>
            </div>

            {/* Model S */}
            <div className="bg-cover bg-center bg-no-repeat h-screen " style={{ backgroundImage: "url('/images/ms.jpg')" }}>
                <div className=" items-center justify-center flex flex-col w-full pt-16">
                    <div className="flex flex-col items-center gap-1 w-full">
                        <p className="text-[3rem] md lg:text-[4rem] text-white font-extrabold">Model S</p>
                        <p className="text-[2rem] md:text-[2rem] lg:text-[rem] text-white font-extrabold">From $68,490</p>
                        <u className="text-sm lg:text-[1rem] text-white font-bold">After Est. Gas Saving $6,500</u>
                    </div>


                    <div className="pt-[3rem] md:pt-[8rem] lg:pt-[17rem] xl:pt-[11rem] justify-center gap-4 flex w-full items-center">
                        <button className="bg-blue-600 text-white font-semibold  text-[10px] py-2 px-8 rounded-[8px] ">Order Now</button>
                        <button className="bg-white text-neutral-600 font-semibold text-[10px] py-2 px-8 rounded-[8px] ">Demo Drive</button>
                    </div>
                </div>
            </div>

            {/* Cyber Truck */}
            <div className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: "url('/images/ct.jpg')" }}>
                <div className=" items-center flex flex-col w-full pt-16">
                    <div className="pt-8">
                        <img src="/images/cyberbg.png" width={300} height={300} alt="image_tesla"/>

                    </div>


                    <div className="pt-[3rem] md:pt-[8rem] lg:pt-[17rem] xl:pt-[11rem] justify-center gap-4 flex w-full items-center">
                        <button className="bg-zinc-950 hover:text-white text-neutral-400 font-semibold text-[10px] py-2 px-8 rounded-[8px]">ORDER NOW</button>
                        <button className="bg-zinc-950 hover:text-white text-neutral-400 font-semibold text-[10px] py-2 px-8 rounded-[8px]">DEMO DRIVE</button>
                    </div>
                </div>
            </div> 

         
            
            {/* solar panel A & B */}
            <div className="w-full" >
                {/* solar panel A */}
                <div className="bg-cover bg-center bg-no-repeat h-screen w-full" style={{ backgroundImage: "url('/images/roof1.jpg')" }}>
                    <div className="items-center flex flex-col w-full pt-16">
                        <h1 className="text-[2rem] lg:text-[3rem] text-white font-bold">Solar Roof</h1>
                        <p className="text-sm md:text-[2rem] underline cursor-pointer text-white font-bold">Schedule a Virtual Consultation</p>
                    </div>

                    <div className="pt-[3rem] md:pt-[8rem] lg:pt-[17rem] xl:pt-[11rem] justify-center gap-4 flex w-full items-center">
                        <button className="bg-blue-600 text-white font-semibold  text-[10px] py-2 px-8 rounded-[8px] ">Order Now</button>
                        <button className="bg-white text-neutral-600 font-semibold text-[10px] py-2 px-8 rounded-[8px] ">Demo Drive</button>
                    </div>
                </div>



                {/* Solar panel B */}
                <div className="bg-cover bg-center bg-no-repeat w-full h-screen" style={{ backgroundImage: "url('/images/roof2.jpg')" }}>
                    <div className="items-center flex flex-col w-full pt-16">
                        <h1 className="text-[2rem] lg:text-[3rem] text-white font-bold">Solar Roof</h1>
                        <p className="text-sm lg:text-[2rem] underline cursor-pointer text-white font-bold">Produce Clean Energy From Your Roof</p>
                    </div>

                    <div className="pt-[3rem] md:pt-[8rem] lg:pt-[17rem] xl:pt-[11rem] justify-center gap-4 flex w-full items-center">
                        <button className="bg-blue-600 text-white font-semibold  text-[10px] py-2 px-8 rounded-[8px] ">Order Now</button>
                        <button className="bg-white text-neutral-600 font-semibold text-[10px] py-2 px-8 rounded-[8px] ">Demo Drive</button>
                    </div>
                </div>
            </div>

            {/* Power wall */}
            <div className="bg-cover bg-center bg-no-repeat h-screen rounded-lg mx-[1rem] md:mx-[2rem] lg:mx-[3rem] mt-[2rem] " style={{ backgroundImage: "url('/images/wp.jpg')" }}>
                <div className=" items-center flex flex-col w-full pt-8">
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-[2rem] lg:text-[3rem] text-neutral-500 font-bold ">Powerwall</p>
                    </div>


                    <div className="md:pt-[20rem] lg:pt-[21rem] xl:pt-[26rem] pt-72 md:block  gap-2  m-auto flex flex-col">
                        <button className="bg-blue-600 text-white font-semibold mt-2 text-[10px] py-2 px-16 rounded-[8px] ml-6">Order Now</button>
                        <button className="bg-white text-neutral-600 mt-2 font-semibold text-[10px] py-2 px-16 rounded-[8px] ml-6">Learn more</button>
                    </div>
                </div>
            </div>

            {/* Accessories */}
            <div className="bg-cover bg-center bg-no-repeat h-screen rounded-lg mx-[1rem] md:mx-[2rem] lg:mx-[3rem] mt-[2rem] " style={{ backgroundImage: "url('/images/charger.jpg')" }}>
                <div className=" items-center flex flex-col w-full pt-8">
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-[2rem] lg:text-[3rem] text-neutral-500 font-bold ">Accessories</p>
                    </div>


                    <div className="md:pt-[20rem] lg:pt-[21rem] xl:pt-[26rem] pt-72 md:block  gap-2  m-auto flex flex-col">
                        <button className="bg-blue-600 text-white font-semibold mt-2 text-[10px] py-2 px-16 rounded-[8px] ml-6">Shop Now</button>
                        
                    </div>
                </div>
            </div>

            {/* we are tesla */}
            <div className=" mx-[1rem] md:mx-[2rem] lg:mx-[3rem] mt-[1rem]">
                <div className=" items-center flex flex-col w-full pt-8 relative">
                    
                    <div className="">
                        <video src="/videos/teslav.mp4" width={0} height={0} alt='video' className="w-[100rem] rounded-lg" controls/>
                    </div>

                    <div className="md:hidden absolute left-[1rem] bottom-[5rem] text-neutral-500 w-fit ">
                        <h1 className="text-sm font-bold">We are Tesla</h1>
                        <button className="bg-slate-200 text-zinc-800 text-sm w-full py-1 mt-1 rounded-md ">Join Tesla</button>
                    </div>

                    {/* <div className="md:absolute left-[2rem] bottom-[10rem] text-white w-fit">
                        <h1 className="text-4xl font-bold">We are Tesla</h1>
                        <button className="bg-slate-200 text-zinc-800 tet-sm w-full py-2 mt-4 rounded-md ">Join Tesla</button>
                    </div> */}


                    {/* <div className="md:pt-[20rem] lg:pt-[21rem] xl:pt-[26rem] pt-72 md:block  gap-2  m-auto flex flex-col">
                        <button className="bg-blue-600 text-white font-semibold mt-2 text-[10px] py-2 px-16 rounded-[8px] ml-6">Shop Now</button>
                        
                    </div> */}
                </div>
            </div>

            
        </main>

        
    )


};

export default Heroone;