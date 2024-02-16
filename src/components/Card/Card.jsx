import React from "react";
import "./Card.css";
const Card = ({ userData }) => {
  return (
    <div className="card grid grid-cols-5 gap-4 bg-white p-8 rounded-lg shadow-lg">
      <div className="col-span-2">
        <img
          src={userData.picture.large}
          alt={`${userData.name.first} ${userData.name.last}`}
          className="rounded-full"
        />
      </div>

      <div className="col-span-3">
        <h2 className="text-2xl font-bold mb-4">
          {userData.name.first} {userData.name.last}
        </h2>

        <div className="grid grid-rows-2 gap-2">
          <p className=" text-medium font-semibold text-gray-600 ">
            {" "}
            <strong>Gender:</strong> {userData.gender}
          </p>
          <p className="text-medium font-semibold text-gray-600 ">
            {" "}
            <strong>Phone Number:</strong> {userData.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
