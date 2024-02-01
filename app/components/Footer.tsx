import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default async function Newest() {

  return (
    <footer className="pt-10 bg-primary">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    <p className=" sm:mx-auto text-4xl text-black font-semibold"> AEG - Boutique</p>
                    <p className="text-gray-950">
                        Unidas por la pasión del patronaje, moda y confeccion
                    </p>
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p className="text-black">© 2024 Kaotika Inc. All rights reserved.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        
                    </ul>
                </div>
            </div>
        </footer>
  );
}