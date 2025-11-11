"use client";

import { useEffect } from "react";

const Logistics = ()=>{

        useEffect(()=>{
                console.log('works her');
                
        },[])

        return(
            <>
                <div className=" pt-10 w-full h-screen flex justify-center items-center">
                    <h1 className="">logistics</h1>
                </div>

            </>
        )
}

export default Logistics;