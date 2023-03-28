import React, { useState } from "react";
import { logo } from "../../assets/images/index";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import allItems from "./index";
import HeaderBottom from "./HeaderBottom";


const Header = () => {
  const [viewAll, setViewAll] = useState("");

  return (
    <div>
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex gap-2 ">
        <div className="headerHover ">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        <div className=" headerHover ">
          <RoomOutlinedIcon />
          <p className="text-sm text-lightText flex flex-col">
            Deliver to
            <span className="text-sm font-semibold text-whiteText">
              Ahmedabad 382350
            </span>
          </p>
        </div>

        <div className=" h-10 rounded-md flex flex-grow relative items-center justify-center bg-gray-200 text-amazon_blue">
          <span className="w-8 h-full  text-sm flex items-center justify-center">
            All
          </span>
          <span onClick={() => setViewAll(!viewAll)} className="cursor-pointer">
            <ArrowDropDownOutlinedIcon />
          </span>
          {viewAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0  overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                {allItems.map((item) => (
                  <li className="cursor-pointer font-titleFont">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base  flex-grow px-4"
            type="text"
            placeholder="Search Amazon.in"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>

        <div className=" font-bold mt-1.5 headerHover">
          EN
          <span className="font-light text-gray-400">
            <ArrowDropDownOutlinedIcon />
          </span>
        </div>

        <div className="headerHover ">
          <p className="text-xs font-semibold text-gray-200  flex flex-col ">
            Hello Bhavin
            <span className="text-sm font-bold text-white">
              Account & Lists
            </span>
          </p>
          <span className="text-gray-400">
            <ArrowDropDownOutlinedIcon />
          </span>
        </div>

        <div className="headerHover ">
          <p className="text-xs font-semibold text-gray-200 flex flex-col">
            Returns
            <span className="text-sm font-bold text-white">& Orders</span>
          </p>
        </div>

        <div className="headerHover  mt-1.5 font-bold">
          <span className="text-lg">
            <ShoppingCartOutlinedIcon />
          </span>
          Cart
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
