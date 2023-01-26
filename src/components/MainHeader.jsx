import React from "react";
import Navigation from "./Navigation";

const MainHeader = () => {
  return (
    <div>
      <div className="bg-gray-200 flex justify-between px-8">
        <div className="flex-none">
          <h1 className="font-light text-sm">Download Tokopedia App</h1>
        </div>
        <div className="font-light text-sm flex w-1/2 pl-32 justify-evenly ">
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
