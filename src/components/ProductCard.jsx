import React from "react";

function ProductCard({ image, price, description, category, title }) {
  return (
    <div className="h-64 w-64 ">
      <div className="p-2 flex justify-center">
        <img className="h-52 w-52" src={image} alt="cloth" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold">{title}</h1>
        <p>{price}</p>
        <p>{description}</p>
        <p>{category}</p>
      </div>
    </div>
  );
}

export default ProductCard;
