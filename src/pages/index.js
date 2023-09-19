import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/UI/Navbar";
import Footer from "@/Components/UI/Footer";
import Head from "next/head";
import Banner from "@/Components/UI/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>SmartTech-Home</title>
        <meta name="PC BUILDER" description="this is pc builder home page" />
      </Head>
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}
