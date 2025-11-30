// @ts-nocheck
"use client"
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Loader, TriangleAlert } from 'lucide-react';
import { AlertContext } from "./DesignUI";
import { Spinner } from "@/components/ui/spinner"

export default function ImageLoader({ url, ready, error }: {
    url: string;
    ready: boolean;
    error: boolean;
}) {

    const [loading, setLoading] = useState(true);
    const [success,setSuccess] = useState(false);
    const {setAlert} = useContext(AlertContext)

    useEffect(()=>{
        let count= 0;
        const interval = setInterval(()=>{
            count++;
            if(ready){
                setSuccess(true);
                setLoading(false);
                clearInterval(interval)
            }
            if(count>=3){
                setAlert(true)
                setLoading(false)
                clearInterval(interval)
            }
        },5000)

        return ()=> clearInterval(interval)
    },[])

    return (
        <>
            {
                loading ? <Spinner className="h-[38px] w-[38px] rounded-full p-2 bg-gray-400"/> : (
                    success ? 
                        <Image src={url}
                        alt="photo"
                        fill
                        className="object-cover" /> :
                            <TriangleAlert className="rounded-full p-3 h-[38px] w-[38px] bg-red-600 m-auto" />
                )
                    
            }
        </>


    )
}