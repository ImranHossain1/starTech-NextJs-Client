import React from "react";
import profileImage from "../../assets/user.png";
import Image from "next/image";
const Reviews = ({ review }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md my-5">
      <div className="flex items-center mb-2 mr-2">
        <Image
          src={profileImage} // Assuming userImage is a URL to the user's image
          alt={"image"}
          height={50}
          width={50}
        />
        <p className="text-xl font-semibold ml-2">
          {review.userName || "User"}
        </p>
      </div>
      <div className="mb-2 flex items-center align-center">
        <p className="text-xl font-semibold">Comment:</p>
        <p className="text-gray-700 font-semibold ml-3">{review.comment}</p>
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
