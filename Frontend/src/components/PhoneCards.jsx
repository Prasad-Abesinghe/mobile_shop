import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

import { Link } from "react-router-dom";

import { FaCartShopping } from "react-icons/fa6";

const PhoneCards = ({ headline, phones }) => {
  return (
    <div className=" my-16 px-4 lg:px-24">
      <h2 className=" text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>
      {/*card */}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {phones.map((phone) => (
            <SwiperSlide key={phone._id}>
              <Link to={`/phone/${phone._id}`}>
                <div>
                  <img src={phone.imageUrl} alt="" />
                  <div className=" absolute top-3 right-5 bg-blue-600 hover:bg-black p-2 rounded">
                    <FaCartShopping
                      className="w-4 h-4 textwhi
                    "
                    />
                  </div>
                </div>
                <div>
                  <h3>{phone.mobileName}</h3>
                  <p>{phone.brand}</p>
                  <div>
                    <p>${phone.price}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhoneCards;
