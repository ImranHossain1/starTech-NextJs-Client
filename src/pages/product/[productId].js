import ProductReview from "@/Components/UI/ProductReview";
import RootLayout from "@/Components/layouts/RootLayout";
import Image from "next/image";

const ProductDetailsPage = ({ product }) => {
  const { data } = product;

  const renderKeyFeatures = () => {
    const { key_features } = data;

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
              src={data?.image}
              alt={data?.product_name} // Use a single alt attribute with the product name
              className="rounded-xl" // Fix typo here
              width={400}
              height={400}
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title text-3xl text-primary font-bold">
              {data?.product_name}
            </h1>
            <div className="text-xl md:flex md:flex-row md:justify-between mt-3">
              <p>
                <span className="font-bold">Category: </span>
                {data?.category}
              </p>
              <p>
                <span className="font-bold">Status: </span>
                {data?.status}
              </p>
              <p>
                <span className="font-bold">Price: </span>${data?.price}
              </p>
            </div>
            <div className="text-xl">
              <p className="text-xl my-3">
                <span className="font-bold">Rating: </span>
                {data?.rating.toFixed(2)}
              </p>
              <p className="text-xl">
                <span className="font-bold">Description: </span>
                {data?.description}
              </p>
            </div>
            <div className="text-xl">
              <h1 className="font-bold mb-2">Key Features:</h1>
              {renderKeyFeatures()}
            </div>
          </div>
        </div>
      </div>
      {<ProductReview id={data._id}></ProductReview>}
      {/* <div className="">
        <h3 className="text-primary font-bold text-2xl mt-4">Reviews:</h3>
        <div className="">
          {product?.reviews?.map((review, index) => (
            <div key={index} className="card shadow-xl rounded-md p-4">
              <p className="text-xl my-1">User: {review.user}</p>
              <p className="my-1">Rating: {review.rating}</p>
              <p className="my-1">Comment: {review.comment}</p>
              <p className="my-1">Date: {review.date}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/v1/products/product-details/${params.productId}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
