import React from "react";
import Navigation from "./Navigation";

const MainHeader = () => {
  return (
    <div>
      <div className="bg-gray-100 flex justify-between px-8 py-[6px]">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>

          <h1 className="font-light text-sm text-gray-600">
            Download Tokopedia App
          </h1>
        </div>
        <div className="font-light text-xs flex w-1/2 pl-52 justify-evenly ">
          <a>Tentang Tokopedia</a>
          <a>Mitra Tokopedia</a>
          <a>Pusat Edukasi Seller</a>
          <a>Promo</a>
          <a>Tokopedia Care</a>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default MainHeader;
