import { FaFacebook, FaInstagram, FaPinterest, FaHeart } from "react-icons/fa";
import Button from "./Button";
import {
  iconPay1,
  iconPay2,
  iconPay3,
  iconPay4,
  iconPay5,
} from "../assets/export";

const Footer = () => {
  return (
    <section className="w-full bg-[#222] md:pt-[8rem] xs:pt-[3rem] pb-6 md:px-16 sm:px-8 xs:px-4">
      <div className="flex flex-col">
        <div className="flex sm:flex-row xs:flex-col justify-center items-start mb-10">
          <div className="w-full">
            <h3 className="text-white text-[15px] mb-4 font-[Poppins-Bold]">
              CATEGORIES
            </h3>
            <p className="text-lightGray md:text-sm xs:text-xs font-[Poppins-Regular] py-2 hover:text-hoverBlue duration-300 cursor-pointer">
              Women
            </p>
            <p className="text-lightGray md:text-sm xs:text-xs font-[Poppins-Regular] py-2 hover:text-hoverBlue duration-300 cursor-pointer">
              Men
            </p>
            <p className="text-lightGray md:text-sm xs:text-xs font-[Poppins-Regular] py-2 hover:text-hoverBlue duration-300 cursor-pointer">
              Shoes
            </p>
            <p className="text-lightGray md:text-sm xs:text-xs font-[Poppins-Regular] py-2 hover:text-hoverBlue duration-300 cursor-pointer">
              Watches
            </p>
          </div>
          <div className="w-full">
            <h3 className="text-white text-[15px] font-[Poppins-Bold] mb-4 sm:mt-0 xs:mt-7">
              HELP
            </h3>
            <p className="text-lightGray md:text-sm xs:text-xs font-[Poppins-Regular] py-2 hover:text-hoverBlue duration-300 cursor-pointer">
              Track Order
            </p>
            <p className="text-lightGray md:text-sm xs:text-xs font-[Poppins-Regular] py-2 hover:text-hoverBlue duration-300 cursor-pointer">
              Returns
            </p>
            <p className="text-lightGray md:text-sm xs:text-xs font-[Poppins-Regular] py-2 hover:text-hoverBlue duration-300 cursor-pointer">
              Shipping
            </p>
            <p className="text-lightGray md:text-sm xs:text-xs font-[Poppins-Regular] py-2 hover:text-hoverBlue duration-300 cursor-pointer">
              FAQ's
            </p>
          </div>
          <div className="w-full mr-8">
            <div>
              <h3 className="text-white text-[15px] font-[Poppins-Bold] mb-4 sm:mt-0 xs:mt-7">
                GET IN TOUCH
              </h3>
              <p className="text-lightGray md:text-sm xs:text-xs font-[Poppins-Regular] py-2 cursor-pointer">
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
            </div>
            <div className="flex  mt-4 duration-300">
              <span>
                <FaFacebook
                  size={20}
                  className="text-lightGray mr-7 hover:text-hoverBlue"
                />
              </span>
              <span>
                <FaInstagram
                  size={20}
                  className="text-lightGray mr-7 hover:text-hoverBlue"
                />
              </span>
              <span>
                <FaPinterest
                  size={20}
                  className="text-lightGray mr-7 hover:text-hoverBlue"
                />
              </span>
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-white text-sm font-[Poppins-Bold] mb-4 sm:mt-0 xs:mt-7">
              NEWSLETTER
            </h3>
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                className="border-b-[2px] border-[#464646] pb-3 bg-[#222] md:text-sm xs:text-xs text-lightGray font-[Poppins-Regular]"
              />
              <span className="w-full md:mt-3 xs:mt-5">
                <Button text={"SUBSCRIBE"} />
              </span>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-lightGray text-center">
          <div className="flex justify-center items-center mt-6">
            <img src={iconPay1} className="max-w-full mr-4" alt="icon-pay-1" />
            <img src={iconPay2} className="max-w-full mr-4" alt="icon-pay-2" />
            <img src={iconPay3} className="max-w-full mr-4" alt="icon-pay-3" />
            <img src={iconPay4} className="max-w-full mr-4" alt="icon-pay-4" />
            <img src={iconPay5} className="max-w-full mr-4" alt="icon-pay-5" />
          </div>
          <div className=" text-lightGray md:text-sm xs:text-xs md:mt-4 xs:mt-6 hover:text-hoverBlue font-[Poppins-Regular] duration-300">
            <p>
              Copyright &copy; 2023 All rights reserved | Made with{" "}
              <span>
                <FaHeart size={15} className="inline-flex text-red-600" />
              </span>{" "}
              by Samscript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
