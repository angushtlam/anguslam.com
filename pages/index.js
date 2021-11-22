import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="m-auto max-w-screen-md p-4 text-white">
        <h2 className="text-xl">Skills</h2>
        <h2 className="text-xl">Past work</h2>
        <h2 className="text-xl">Contact me</h2>
      </div>
    </div>
  );
}
