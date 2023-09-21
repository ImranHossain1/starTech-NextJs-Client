import RootLayout from "@/Components/layouts/RootLayout";
import dynamic from "next/dynamic";
import React from "react";

const CategoryPage = ({ product }) => {
  const DynamicProduct = dynamic(
    () => import("../../Components/UI/FeaturedProduct"),
    {
      loading: () => <p className="text-xl font-bold">Loading...</p>,
    }
  );
  return (
    <div>
      <DynamicProduct
        products={product.data}
        handleAddToBuilder={() => handleAddToBuilder()}
      ></DynamicProduct>
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `http://localhost:5000/api/v1/products/?category=${params.categoryId}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
