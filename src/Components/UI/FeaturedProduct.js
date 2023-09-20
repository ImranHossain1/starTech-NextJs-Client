import Image from "next/image";
import Link from "next/link";

const FeaturedProduct = ({ products }) => {
  return (
    <div className="md:px-16 px-4 my-8">
      <div className="">
        <h1 className="text-center font-bold text-3xl">Featured Products</h1>
        <p className="text-center md:mt-3 md:mb-8 mb-3">
          Check & Get Your Desired Product!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products?.map((product, idx) => (
          <div key={idx} className="card bg-white shadow-xl">
            <figure>
              <Image
                src={product?.image}
                alt={product?.product_name} // Use a single alt attribute with the product name
                className="w-full max-h-72"
                width={200}
                height={200}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">
                {product?.product_name}
              </h2>

              <p>
                <span className="font-bold">Category : </span>
                {product?.category}
              </p>
              <p>
                <span className="font-bold">Status : </span>
                {product?.status}
              </p>
              <p>
                <span className="font-bold">Price : </span>
                {product?.price}
              </p>
              <p>
                <span className="font-bold">Rating : </span>
                {product?.average_rating}
              </p>

              <div className="card-actions justify-end">
                <Link href={`/product/${product?._id}`}>
                  <button className="btn btn-sm btn-primary uppercase">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
