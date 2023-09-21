import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import RootLayout from "@/Components/layouts/RootLayout";
import { clearCart } from "@/redux/features/cart/cartSlice";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  // Assuming you have a Redux store that contains the cart state
  const { components, total } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  // Render each product in the cart
  const renderCartItems = () => {
    return components.map((product, index) => (
      <div key={index} className="mb-4">
        <div className="flex items-center justify-between">
          <span>{product.product_name}</span>
          <span>${product.price}</span>
        </div>
      </div>
    ));
  };
  const handlePlaceOrder = () => {
    // Handle placing the order (e.g., making an API request)

    // Clear the cart by dispatching the clearCart action
    dispatch(clearCart());
    toast.success("Your Order Successfully!");
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
        <div className="ml-4">
          <Link className="btn btn-primary " href="/pc-builder">
            Back to Pc Builder
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

        {components.length > 0 ? (
          <div>
            {renderCartItems()}

            <div className="mt-4">
              <div className="flex justify-between">
                <span className="font-semibold">Total:</span>
                <span className="text-xl">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="flex justify-center mt-4">
          {components.length > 0 && (
            <button
              className="btn btn-primary mt-4 "
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
CheckoutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
