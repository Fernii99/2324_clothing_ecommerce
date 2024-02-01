import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Footer from "./components/Footer";
import GroupTeam from "./components/GroupTeam";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className=" pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <GroupTeam />
      <Newest />
      <Footer />
    </div>
  );
}