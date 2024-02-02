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
                ¡Compra hostia!
              </h1>
              <p className=" leading-relaxed text-gray-400 xl:text-xl">
                Tu slogan aquí. Cuentanos tu vida y nosotros la redactamos como si fuera interesante. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas ultricies mi eget mauris. Vel pretium lectus quam id leo in vitae turpis massa.
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
