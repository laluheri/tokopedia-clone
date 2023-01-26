import React from "react";
import tokopedia from "../assets/tokopedia.svg";
import sellerNoLogo from "../assets/seller_no_logo_0.png";
import defaultLogoUser from "../assets/default_toped-18.jpg";

const Navigation = () => {
  return (
    <div className="bg-white shadow-md h-14 px-8 flex items-center">
      <img src={tokopedia} className="items-center text-center" />
      <p className="font-light text-sm mx-6">Kategori</p>
      <div className="w-1/2 flex items-center">
        <input
          type="text"
          placeholder="Cari di Tokopedia"
          className="border border-l-green-500 border-y-green-500 rounded-l-lg w-full py-2 px-4 text-xs font-light"
        />
        <div className=" bg-gray-100 rounded-r-lg py-2 px-2 border-y-green-500 border border-r-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="ml-8 flex  w-32 justify-between">
        <div>
          <span className=" items-center justify-center inline-flex rounded-t-xl rounded-b-xl px-1 text-xs text-white bg-red-500 ml-2 -mt-2 border-white border-2 absolute">
            23
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
        <div>
          <span className="text-center rounded-t-xl rounded-b-xl px-1 text-xs text-white bg-red-500 ml-2 -mt-2 border-white border-2 absolute">
            6
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </div>
        <div>
          <span className="inline-flex  rounded-t-xl rounded-b-xl px-1 text-xs text-white bg-red-500 ml-2 -mt-2 border-white border-2 absolute">
            10
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
      </div>
      <div className="ml-10">
        <img
          src={sellerNoLogo}
          width={32}
          height={32}
          className="inline-block"
        />
        <span className="text-xs font-light">magnetect</span>
        <img
          src={defaultLogoUser}
          width={24}
          height={24}
          className="inline-block rounded-full ml-8"
        />
        <span className="text-xs font-light">magnetect</span>
      </div>
    </div>
  );
};

export default Navigation;
