import Image from "next/image";

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

    return (
        <div className="w-xl h-lg m-auto bg-black flex items-center">
            <div>
                {
                    images.map((img,index)=>{
                        return(
                            <div key={index} className="rounded-full overflow-hidden h-[38px] w-[38px]">
                                <Image src={img.url}
                                alt="photo"
                                height={50}
                                width={50}/>
                                
                            </div>
                        )
                    })
                }
            </div>
            <div className="text-white flex flex-col ">
                <h1 className="text-xl"><span className="mr-2">{name}</span>
                    <span>{count}</span>
                </h1>
                <h2 className="font-light">Mordabad, Uttar Pradesh</h2>
            </div>
            <div></div>
        </div>
    )
}