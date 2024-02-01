import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import bg from '../../assets/vestidoRopa.jpg'

export default async function Hero() {
  return (
     
      <div className="h-[80vh] ">

        <div className="flex w-full justify-center align-center h-full  mt-8">
          <div className="flex flex-row w-4/6 h-96 bg-primary justify-between align-center mt-10"> 
            <div className="flex w-3/6 -ml-16 justify-center align-center flex-col  ">
              <h1 className="mb-4  text-6xl font-bold sm:text-5xl md:mb-8 md:text-7xl">
                Top Fashion for a top price!
              </h1>
              <p className=" leading-relaxed text-gray-400 xl:text-xl">
                We sell only the most exclusive and high quality products for you.
                We are the best so come and shop with us.
              </p>
            </div>
            <div className=" -mt-10 w-2/6 ">
              <Image src={bg.src} width={400} height={500} alt="image" />
             
            </div>
          </div>
        </div>
      </div>
  );
}
