import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

const ProductReviewForm = ({ id }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
    setError(""); // Clear the error when rating changes
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    setError(""); // Clear the error when comment changes
  };

  const handleSubmit = async () => {
    if (!rating || !comment) {
      setError("Both rating and comment are required.");
      return;
    }

    try {
      // Create the data object to send to the API
      const data = {
        reviews: {
          rating,
          comment,
        },
      };

      // Make a POST request to the API using the fetch method
      await fetch(
        `http://localhost:5000/api/v1/products/update_product/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      toast.success("Review has been published");
      // Reset the form after a successful submission and clear the error
      setRating(0);
      setComment("");
      setError("");
    } catch (error) {
      console.error("Error updating product review:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md my-5">
      <h2 className="text-2xl font-semibold mb-4">Add Your Review</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="rating" className="block font-semibold">
          Rating:
        </label>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => handleRatingChange(value)}
              className={`p-2 ${
                rating >= value ? "text-yellow-500" : "text-gray-300"
              } hover:text-yellow-500 focus:outline-none`}
            >
              <FontAwesomeIcon icon={faStar} />
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block font-semibold">
          Comment:
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          rows={4}
          className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ProductReviewForm;
