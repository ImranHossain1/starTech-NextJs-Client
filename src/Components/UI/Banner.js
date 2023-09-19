import banner from "@/assets/hero.jpg";
import banner2 from "@/assets/chip.jpg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-base-100 text-base-content py-4 px-8 sm:px-8 md:px-16 md:py-16  flex flex-col items-center lg:flex-row">
      <div className="lg:w-1/2 lg:pl-8 mt-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Next Generation PC Builder
        </h1>
        <p className="text-lg mb-6 text-justify italic">
          At SmartTech, customer satisfaction is our top priority. In response
          to the growing demand for online shopping, we are excited to introduce
          our E-Commerce Website. Our online store is highly trusted and has
          gained a reputation as one of the most visited E-Commerce websites. At
          SmartTech, we are dedicated to revolutionizing the online shopping
          experience.
        </p>
        <Link href="/" className="btn btn-primary">
          Explore Now
        </Link>
      </div>
      <div className="lg:w-1/2 md:p-8">
        <Image
          src={banner2}
          alt=""
          width={100}
          height={100}
          className="object-cover rounded-lg"
          layout="responsive"
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
