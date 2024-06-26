import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-phones")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);
  return (
    <div className=" mt-28 px-4 lg:px-24">
      <h2 className=" text-5xl font-bold text-center">All Phones are here</h2>
      <div className=" grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 ">
        {phones.map((phone) => (
          <Card className="max-w-sm">
            <div className=" flex flex-col gap-2 justify-center items-center">
              <img src={phone.imageUrl} alt="" />

              <h2>{phone.mobileName}</h2>
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {phone.brand}
                </h5>
              </a>
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${phone.price}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                More About
              </a>
              <a
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add to cart
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
