import { Inter } from "next/font/google";
import Head from "next/head";
import Banner from "@/Components/UI/Banner";
import RootLayout from "@/Components/layouts/RootLayout";
import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
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
    revalidate: 20,
  };
};
