import React from "react";
import { logo } from "../../assets/images/index";
import LanguageIcon from "@mui/icons-material/Language";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

const Footer = () => {
  return (
    <div className="h-[33rem] bg-amazon_light mt-[500px]">
      <div className="h-10 bg-slate-600 text-whiteText flex font-semibold items-center justify-center hover:bg-slate-500 text-xs cursor-pointer">
        Back to top
      </div>
      <div className="flex justify-center gap-32 py-10 font-bold text-whiteText ">
        <div>
          Get to Know Us
          <ul className=" font-normal text-sm cursor-pointer py-2 leading-loose">
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Careers</li>
            <li className="hover:underline">Press Releases</li>
            <li className="hover:underline">Amazon Science</li>
          </ul>
        </div>

        <div>
          Connect with Us
          <ul className=" font-normal text-sm cursor-pointer py-2 leading-loose">
            <li className="hover:underline">Facebook</li>
            <li className="hover:underline">Twitter</li>
            <li className="hover:underline">Instagram</li>
          </ul>
        </div>

        <div>
          Make Money with Us
          <ul className=" font-normal text-sm cursor-pointer py-2 leading-loose">
            <li className="hover:underline">Sell on Amazon</li>
            <li className="hover:underline">Sell under Amazon Accelerator</li>
            <li className="hover:underline">Protect and Build Your Brand</li>
            <li className="hover:underline">Amazon Global Selling</li>
            <li className="hover:underline">Become an Affiliate</li>
            <li className="hover:underline">Fulfilment by Amazon</li>
            <li className="hover:underline">Advertise Your Products</li>
            <li className="hover:underline">Amazon Pay on Merchants</li>
          </ul>
        </div>

        <div>
          Get to Know Us
          <ul className=" font-normal text-sm cursor-pointer py-2 leading-loose  hover:decoration-gray-100">
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Careers</li>
            <li className="hover:underline">Press Releases</li>
            <li className="hover:underline">Amazon Science</li>
          </ul>
        </div>
        <span className="h-[1px] w-full bg-gray-600 absolute mt-72"></span>
      </div>
      <div className="flex justify-center gap-24 items-center ">
        <img className="h-6 " src={logo} alt="logo" />

        <span className="text-gray-300 border border-gray-500 rounded-sm p-1 cursor-pointer ">
          <LanguageIcon className=" text-sm" />
          English
          <UnfoldMoreIcon className=" text-gray-500" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
