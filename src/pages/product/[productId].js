import ProductReview from "@/Components/UI/ProductReview";
import Reviews from "@/Components/UI/Reviews";
import RootLayout from "@/Components/layouts/RootLayout";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductDetailsPage = ({ product }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (product) {
      setIsLoaded(true);
    }
  }, [product]);

  if (!isLoaded) {
    // Render a loading indicator while data is being fetched
    return (
      <div className="mt-10 w-11/12 mx-auto text-center">
        <p className="text-2xl font-semibold">Loading...</p>
      </div>
    );
  }
  if (!product?.data) {
    return (
      <div className="mt-10 w-11/12 mx-auto text-center">
        <p className="text-2xl font-semibold">Product Not found</p>
      </div>
    );
  }
  const renderKeyFeatures = () => {
    const { key_features } = product?.data;

    if (!key_features) {
      return null;
    }

    return (
      <div className="text-xl">
        <h1 className="font-bold mb-2">Key Features:</h1>
        <ul className="list-disc ml-6 md:ml-12">
          {Object.entries(key_features).map(([key, value]) => (
            <li key={key}>
              <strong>{key.replace(/_/g, " ")}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="mt-10 w-11/12 mx-auto">
      <div className="card shadow-xl p-5">
        <div className="lg:flex gap-8">
          <figure className="md:w-6/12">
            <Image
              src={product?.data?.image}
              alt={product?.data?.product_name} // Use a single alt attribute with the product name
              className="rounded-xl" // Fix typo here
              width={400}
              height={400}
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title text-3xl text-primary font-bold">
              {product?.data?.product_name}
            </h1>
            <div className="text-xl md:flex md:flex-row md:justify-between mt-3">
              <p>
                <span className="font-bold">Category: </span>
                {product?.data?.category}
              </p>
              <p>
                <span className="font-bold">Status: </span>
                {product?.data?.status}
              </p>
              <p>
                <span className="font-bold">Price: </span>$
                {product?.data?.price}
              </p>
            </div>
            <div className="text-xl">
              <p className="text-xl my-3">
                <span className="font-bold">Rating: </span>
                {product?.data?.rating}
              </p>
              <p className="text-xl">
                <span className="font-bold">Description: </span>
                {product?.data?.description}
              </p>
            </div>
            <div className="text-xl">
              <h1 className="font-bold mb-2">Key Features:</h1>
              {renderKeyFeatures()}
            </div>
          </div>
        </div>
      </div>
      {<ProductReview id={product?.data._id}></ProductReview>}
      {product?.data?.reviews.map((review, index) => (
        <Reviews key={index} review={review}></Reviews>
      ))}
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://next-gen-pc-builder-server.vercel.app/api/v1/products/"
  );
  const products = await res.json();
  const paths = products.data.map((product) => ({
    params: { productId: product._id },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://next-gen-pc-builder-server.vercel.app/api/v1/products/product-details/${params.productId}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
};
