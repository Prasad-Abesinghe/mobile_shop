import React from "react";
import BannarCard from "../home/BannarCard";

const Banner = () => {
  return (
    <div className=" px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className=" flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className=" md:w-1/2 space-y-8 h-full">
          <h2 className=" text-5xl font-bold leading-snug text-black">
            Buy a good mobile phone{" "}
            <span className=" text-blue-500">For the best prices</span>
          </h2>
          <p className=" md:w-4/5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            voluptate sit ipsa aperiam earum itaque sapiente, totam suscipit vel
            cupiditate harum neque? Cumque dolor, eveniet corporis nihil
            blanditiis eius ipsam?
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search a phone"
              className=" py-2 px-2 rounded-s-sm outline-none"
            />
            <button className=" bg-blue-300 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 ">
              Search
            </button>
          </div>
        </div>
        <div>
            <BannarCard></BannarCard>
        </div>
      </div>
    </div>
  );
};

export default Banner;
