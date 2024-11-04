'use client'

import React from "react"
import Link from "next/link"


const Footer=()=>{

    return (
        <>
            <footer className=" md:text-sm flex flex-col gap-4 items-center justify-center my-[2rem] text-gray-600 text-[10px] mx-[1rem] md:mx-[2rem] lg:mx-[3rem] ">
                
                <div className=" flex">
                    <sup>1</sup><p>Monthly lease payment excludes taxes and fees,  is based on $44,990 Model Y Long Range Rear-Wheel  <br /> Drive purchase price and is subject to change at any time.  Requires $2,999 down with 36 months and <br /> 10,000 miles. Subject to credit approval and available  in select U.S. states. Terms apply.</p>
                </div>

                {/* <div className="items-center">
                    <p>Monthly lease payment excludes taxes and fees,  is based on $42,490 Model 3 Long Range Rear-Wheel <br /> Drive purchase price and is subject to change at any time. Requires $2,999 down with 36 months and <br /> 10,000 miles. Subject to credit approval and available in select U.S. states. Terms apply.
                    </p>
                </div> */}

                <div className="flex">
                <sup>2</sup><p>Price before estimated savings is $81,630, including Destination and Order Fees, but excluding taxes <br /> and  other  fees.   Subject to change. Vehicle shown has upgrades  that will increase the price.  Estimated <br /> savings includes  $6,500 in gas savings estimated over five years, the  $7,500 Federal Tax Credit and <br />  state  incentives, available  to eligible buyers and subject to MSRP caps. Not all vehicles,  customers  or <br /> finance options will be eligible. Terms apply.</p>
                </div>

                <div className="flex">
                <sup>3</sup><p>Price before estimated savings is $76,630, including Destination and Order Fees, but  excluding  taxes <br /> and other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated <br /> savings includes $6,500 in gas savings estimated over five years and state incentives, available to <br /> eligible buyers and subject to MSRP caps. Not all vehicles, customers or  finance options will be eligible. <br /> Terms apply.</p>
                </div>

                
            </footer>
        </>
    )




};

export default Footer;