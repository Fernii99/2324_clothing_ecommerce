import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import bg from '../../assets/backgroundImage.jpg'

export default async function Hero() {
  return (
      // <section className="flex" style={{
      //   backgroundImage: `url(${bg.src})`,
      //   width: '99vw',
      //   height: '90vh',
      //   objectFit: "cover",
      // }}>
        <div className="flex w-full justify-center align-center h-full ">

          <div className="flex w-4/6 bg-primary  flex-row justify-between align-center sm:mb-12 lg:mb-0  lg:pb-24 lg:pt-24"> 
            <div className="flex -ml-6 justify-center align-center">
              <p className=" leading-relaxed text-gray-200 xl:text-2xl">
                We sell only the most exclusive and high quality products for you.
                We are the best so come and shop with us.
              </p>
            </div>
            <div className="-mr-6 ">
              <h1 className="mb-4 text-6xl font-bold sm:text-5xl md:mb-8 md:text-7xl">
                Top Fashion for a top price!
              </h1>
            </div>
          </div>
          
        </div>
  );
}

// {/* </section> */}