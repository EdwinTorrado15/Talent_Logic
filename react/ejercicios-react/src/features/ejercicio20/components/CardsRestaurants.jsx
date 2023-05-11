import React from "react";

const CardsRestaurants = ({ restaurants }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {restaurants().map((restaurant, index) => (
        <div className="max-w-md rounded overflow-hidden shadow-lg m-4 p-3 space-y-1">
          <p key={index} className="text-xl font-bold">
            {restaurant.name}
          </p>
          <p className="bg-blue-500 w-max text-white font-medium px-3 rounded-md">
            {restaurant.typeRestaurant}
          </p>
          <p className="text-gray-600 text-sm">{restaurant.address}</p>
          <p className="text-gray-600 text-sm">{restaurant.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsRestaurants;
