import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/UI/Navbar";
import Footer from "@/Components/UI/Footer";
import Head from "next/head";
import Banner from "@/Components/UI/Banner";
import RootLayout from "@/Components/layouts/RootLayout";
import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });

export default function Products({ products }) {
  const DynamicProduct = dynamic(
    () => import("../Components/UI/FeaturedProduct"),
    {
      loading: () => <p className="text-xl font-bold">Loading...</p>,
    }
  );
  return (
    <div>
      <Head>
        <title>SmartTech-Home</title>
        <meta name="PC BUILDER" description="this is pc builder home page" />
      </Head>
      <DynamicProduct products={products}></DynamicProduct>
    </div>
  );
}

Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://next-gen-pc-builder-server.vercel.app/api/v1/products/?limit=50&page=1`
  );
  const data = await res.json();
  const shuffledProducts = data?.data.sort(() => Math.random() - 0.5);

  return {
    props: {
      products: shuffledProducts,
    },
    revalidate: 20,
  };
};
