import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/UI/Navbar";
import Footer from "@/Components/UI/Footer";
import Head from "next/head";
import Banner from "@/Components/UI/Banner";
import RootLayout from "@/Components/layouts/RootLayout";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  const { data: session } = useSession(); // Get the user session

  // Function to log user details
  const logUserDetails = () => {
    if (session) {
      console.log(session.user);

      // Add more user details as needed
    }
  };
  logUserDetails();
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

      <Banner />
      <DynamicProduct products={products}></DynamicProduct>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products/");
  const data = await res.json();

  const shuffledProducts = data?.data.sort(() => Math.random() - 0.5);
  const randomProducts = shuffledProducts.slice(0, 6);

  return {
    props: {
      products: randomProducts,
    },
  };
};
