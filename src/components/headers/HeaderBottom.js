import React from "react";
import { useState } from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import DehazeIcon from "@mui/icons-material/Dehaze";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";

const HeaderBottom = () => {
  const [onOpen, setOnOpen] = useState();
  return (
    <div className="px-4 h-[45px] bg-amazon_light text-white flex items-center font-titleFont">
      <ul className="flex gap-2 tracking-wide items-center text-sm">
        <li className="headerHover gap-1">
          <span onClick={() => setOnOpen(true)}>
            <DehazeIcon />
          </span>
          {onOpen && (
            <div className="absolute w-[350px] h-screen top-0 left-0  overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black flex-col z-50">
              <div className="w-full h-12 bg-amazon_light text-whiteText py-2 px-6 flex items-center font-bold text-lg gap-2 ">
                <AccountCircleIcon />
                Hello,Bhavin
              </div>

              <div className="absolute w-80 top-12 text-gray-800 text-base p-2 flex-col gap-1 z-50 py-2 px-6 font-bold cursor-text">
                Trending
                <ul className="text-sm font-normal py-2 cursor-pointer">
                  <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                    Best Sellers
                  </li>
                  <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                    New Releases
                  </li>
                  <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                    Movers and Shakers
                  </li>
                </ul>
                <div className="py-2">
                  Digital Content And Devices
                  <ul className="text-sm font-normal py-2 cursor-pointer">
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      Amazon miniTV-FREE entertainment
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      Echo & Alexa
                      <span>
                        <KeyboardArrowRightIcon />
                      </span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      Fire TV
                      <span>
                        <KeyboardArrowRightIcon />
                      </span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      Kindle E-Readers & eBooks
                      <span>
                        <KeyboardArrowRightIcon />
                      </span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      Audible Audiobooks
                      <span>
                        <KeyboardArrowRightIcon />
                      </span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      Amazon Prime Video
                      <span>
                        <KeyboardArrowRightIcon />
                      </span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      Amazon Prime Music
                      <span>
                        <KeyboardArrowRightIcon />
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  Shop By Category
                  <ul className="text-sm font-normal py-2 cursor-pointer ">
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      Mobiles,Computers
                      <span>
                        <KeyboardArrowRightIcon />
                      </span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      TV,Appliances,Electronics
                      <span>
                        <KeyboardArrowRightIcon />
                      </span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      Men's Fashion
                      <span>
                        <KeyboardArrowRightIcon />
                      </span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      Women's Fashion
                      <span>
                        <KeyboardArrowRightIcon />
                      </span>
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      See All
                      <span>
                        <KeyboardArrowRightIcon />
                      </span>
                    </li>
                  </ul>
                </div>
                Programs & Features
                <ul className="text-sm font-normal cursor-pointer ">
                  <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                    Gift Cards & Mobile Recharges
                    <span>
                      <KeyboardArrowRightIcon />
                    </span>
                  </li>
                  <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                    Flight Tickets
                  </li>
                  <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                    Clearance Store
                  </li>
                </ul>
                <div className="py-2">
                  Help & Setting
                  <ul className="text-sm font-normal py-2 cursor-pointer">
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      Your Account
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      Customer Service
                    </li>
                    <li className="flex items-center justify-between hover:bg-zinc-200 py-2">
                      Sign Out
                    </li>
                  </ul>
                </div>
              </div>

              <div
                onClick={() => setOnOpen(false)}
                className="cursor-pointer absolute top-2 left-[280px] w-7 h-7 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300 "
              >
                <CloseIcon />
              </div>
            </div>
          )}
          All
        </li>
        <li className="headerHover">Amazon miniTv</li>
        <li className="headerHover">Sell</li>
        <li className="headerHover">Gifts Cards</li>
        <li className="headerHover">
          Amazon Business
          <span className="text-gray-400">
            <ArrowDropDownOutlinedIcon />
          </span>
        </li>
        <li className="headerHover">Buy Again</li>
        <li className="headerHover">Baby</li>
        <li className="headerHover">
          Browsing History
          <span className="text-gray-400">
            <ArrowDropDownOutlinedIcon />
          </span>
        </li>
        <li className="headerHover">Bhavin's Amazon.in</li>
        <li className="headerHover">Subscribe & Save</li>
        <li className="headerHover">Gift ideas</li>
      </ul>
    </div>
  );
};

export default HeaderBottom;
