import React from "react";

const Reviews = ({ review }) => {
  console.log(review);
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <p className="text-xl font-semibold mr-2">Comment:</p>
        <p className="text-gray-700">{review.comment}</p>
      </div>
      <div className="flex items-center">
        <p className="text-xl font-semibold mr-2">Rating:</p>
        <div className="flex items-center text-yellow-500">
          {Array.from({ length: review.rating }, (_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
