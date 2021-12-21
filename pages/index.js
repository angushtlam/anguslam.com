import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="p-4">
        <div className="bg-black m-auto max-w-screen-md text-white">
          <h2 className="text-xl">Skills</h2>
          <h2 className="text-xl">Past work</h2>
          <h2 className="text-xl">Contact me</h2>
        </div>
      </div>
    </div>
  );
}
