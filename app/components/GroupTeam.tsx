import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { client } from "../lib/sanity";
import { userData } from "../interface";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "profile"] {
        _id,
        name,
        "imageUrl": image.asset->url,
        description
      }`;

  const data = await client.fetch(query);
  
 
  return data;
}

export default async function GroupTeam (){

  const data: userData[] = await getData();

    return(
        
              <div className="flex  w-full bg-primary  justify-around py-24 sm:py-32">
                <div className="flex flex-col w-5/6 align-center justify-center">
                  <div className=" w-full">
                    <h2 className="text-7xl font-bold text-white">Conócenos</h2>
                    <p className="mt-6 text-lg text-white w-3/6">
                    Bienvenidos a nuestro espacio creativo en el mundo del patronaje. Somos un grupo apasionado que comparten un amor por la moda y la confección, y nos dedicamos al estudio y perfeccionamiento del arte del patronaje. Aquí podreis encontrar parte de nuestros trabajos realizados durante los años de estudio. 
                    </p>
                  </div>
                  <div className="flex flex-row w-full mt-5">
                    {data.map((person) => (
                      <div key={person._id} className="border-solid border-2 border-black rounded-xl w-1/3 p-5 mx-4 ">
                          <Link href={`/${person.name}`}>
                        <div className="flex flex-row">
                            <div className="flex flex-col gap-x-6 ">
                              <Image
                                src={person.image}
                                alt="Profile Picture"
                                className="flex bg-destructive"
                                width={200}
                                height={200}
                               
                              />
                            </div>
                            <div>
                              <div className="flex-col pl-2" >
                                  <h3 className="text-3xl font-semibold text-gray-900">
                                    {person.name}
                                  </h3>
                                    <span className="flex text-sm">{person.description.substring(0, 100)}...</span>
                                    <div className="flex flex-row mt-6 align-center justify-end">

                                      <span className=" text-black">Ver más</span> 
                                      <ArrowRight className="w-4 h-4 text-black mt-1" />
                                    </div>
                              </div>
                            </div>
                        </div> 
                        </Link>
                    </div>
                    ))}
                    </div>
                </div>
              </div>
    )
}