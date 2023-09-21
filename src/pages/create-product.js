import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "@/Components/UI/Navbar";
import Footer from "@/Components/UI/Footer";
import toast from "react-hot-toast";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [message, setMessage] = useState("");
  const [keyFeatures, setKeyFeatures] = useState({});
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");

  const onSubmit = async (data) => {
    // Include the key features data in the data object
    data.key_features = keyFeatures;
    data.price = parseFloat(data.price);
    try {
      // Send a POST request to your backend API to create the product
      const response = await fetch(
        "http://localhost:5000/api/v1/products/create-product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Assuming data contains the product details
        }
      );

      if (response.ok) {
        toast.success("Product created successfully.");
        reset(); // This resets all form fields to their default values
        // You can also reset the keyFeatures state here if needed
        setKeyFeatures({});
      } else {
        toast.error("Error creating product.");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Error creating product.");
    }
  };

  const handleAddKeyFeature = () => {
    // Add a new key-value pair to the keyFeatures state
    if (newKey && newValue) {
      setKeyFeatures({ ...keyFeatures, [newKey]: newValue });
      setNewKey("");
      setNewValue("");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen my-10">
        <div className="w-full max-w-md p-6 border border-gray-300 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4">Create Product</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="image" className="block mb-2">
                Image URL:
              </label>
              <input
                {...register("image", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.image && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="product_name" className="block mb-2">
                Product Name:
              </label>
              <input
                {...register("product_name", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.product_name && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block mb-2">
                Category:
              </label>
              <select
                {...register("category", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="processor">Processor</option>
                <option value="motherboard">Motherboard</option>
                <option value="ram">RAM</option>
                <option value="powerSupplyUnit">Power Supply Unit</option>
                <option value="storageDevice">Storage Device</option>
                <option value="monitor">Monitor</option>
                <option value="other">Other</option>
              </select>
              {errors.category && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="status" className="block mb-2">
                Status:
              </label>
              <select
                {...register("status", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
              {errors.status && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block mb-2">
                Price:
              </label>
              <input
                type="text" // Change type to "text" to allow both integers and floats
                {...register("price", {
                  required: true,
                  pattern: {
                    value: /^[0-9]+(\.[0-9]{1,2})?$/, // Regex pattern for a valid number or float with up to 2 decimal places
                    message:
                      "Price must be a number with up to 2 decimal places",
                  },
                })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.price && (
                <span className="text-red-500 text-sm">
                  {errors.price.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block mb-2">
                Description:
              </label>
              <textarea
                {...register("description", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.description && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-2">Key Features:</label>
              {Object.entries(keyFeatures).map(([key, value]) => (
                <div key={key} className="flex mb-2">
                  <input
                    type="text"
                    placeholder="Key"
                    value={key}
                    onChange={(e) => {
                      const updatedKeyFeatures = { ...keyFeatures };
                      updatedKeyFeatures[key] = e.target.value;
                      setKeyFeatures(updatedKeyFeatures);
                    }}
                    className="w-1/2 mr-2 border border-gray-300 rounded px-3 py-2"
                  />
                  <input
                    type="text"
                    placeholder="Value"
                    value={value}
                    onChange={(e) => {
                      const updatedKeyFeatures = { ...keyFeatures };
                      updatedKeyFeatures[key] = e.target.value;
                      setKeyFeatures(updatedKeyFeatures);
                    }}
                    className="w-1/2 mr-2 border border-gray-300 rounded px-3 py-2"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updatedKeyFeatures = { ...keyFeatures };
                      delete updatedKeyFeatures[key];
                      setKeyFeatures(updatedKeyFeatures);
                    }}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="flex mb-2">
                <input
                  type="text"
                  placeholder="New Key"
                  value={newKey}
                  onChange={(e) => setNewKey(e.target.value)}
                  className="w-1/2 mr-2 border border-gray-300 rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="New Value"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  className="w-1/2 mr-2 border border-gray-300 rounded px-3 py-2"
                />
                <button
                  type="button"
                  onClick={handleAddKeyFeature}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="mt-6">
              <input
                type="submit"
                value="Create Product"
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 cursor-pointer"
              />
            </div>
          </form>
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateProduct;
