// @ts-nocheck
"use client"
import Image from "next/image";
import { createContext, useState } from "react";
import { TriangleAlert } from 'lucide-react';
import ImageLoader from "./ImageLoader";


export const AlertContext = createContext(null)

export default function DesignUI({
    name,
    count,
    images
}: {
    name: string;
    count: number;
    images: {
        url: string;
        ready: boolean;
        error: boolean;
    }[];
}) {

    const imgCount = images.length
    for(var i = imgCount ; i<=4; i++){
        images.push({
            url : "https://placehold.co/600x400/orange/white/png",
            ready : true,
            error : false,
        })
    }
    const [alert, setAlert] = useState(false)


    return (
        <AlertContext.Provider value={{alert,setAlert}}>
        <div className="w-xl h-32 relative bg-black flex items-center gap-4 p-4 pr-12">
            <div className="flex flex-wrap w-20">


                <div className="z-4 rounded-full relative left-1 top-1 overflow-hidden h-[38px] w-[38px]">
                    {
                        images[0].ready ?
                            <Image src={images[0].url}
                                alt="photo"
                                fill
                                className="object-cover" /> : <ImageLoader {...images[0]}/>

                    }


                </div>
                <div className="z-3 rounded-full relative right-1 top-1 overflow-hidden h-[38px] w-[38px]">
                    {
                        images[1].ready ?
                            <Image src={images[1].url}
                                alt="photo"
                                fill
                                className="object-cover" /> : <ImageLoader {...images[1]}/>

                    }

                </div>
                <div className="z-2 rounded-full relative left-1 bottom-1 overflow-hidden h-[38px] w-[38px]">
                    {
                        images[2].ready ?
                            <Image src={images[2].url}
                                alt="photo"
                                fill
                                className="object-cover" /> : <ImageLoader {...images[2]}/>

                    }

                </div>
                <div className="z-1 rounded-full relative right-1 bottom-1 overflow-hidden h-[38px] w-[38px]">
                    {
                        images[3].ready ?
                            <Image src={images[3].url}
                                alt="photo"
                                fill
                                className="object-cover" /> : <ImageLoader {...images[3]}/>

                    }

                </div>
            </div>
            <div className="text-white flex flex-col flex-1">
                <h1 className="text-xl font-bold"><span className="mr-2">{name}</span>
                    <span>{count}</span>
                </h1>
                <h2 className="font-extralight text-md">Mordabad, Uttar Pradesh</h2>
            </div>
            {
                alert &&
                <TriangleAlert className="h-14 w-14 rounded-full p-3 bg-red-600" />

            }

        </div>
    </AlertContext.Provider>
    )
}