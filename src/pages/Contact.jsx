import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { email } from "../assets/export";

const Contact = () => {
  return (
    <section>
      <div className="bg-aboutBanner bg-cover bg-center md:mt-[4rem] xs:mt-[4.9rem]">
        <div className="w-full h-[200px] flex justify-center items-center mb-[4rem]">
          <h1 className="text-white md:text-5xl xs:text-4xl font-[Poppins-Bold]">
            Contact
          </h1>
        </div>
      </div>
      <div className="flex sm:flex-row xs:flex-col justify-start items-start mb-20 md:mx-12 sm:mx-8 xs:mx-4">
        <div className="basis-1/2 w-full h-[600px] flex flex-col justify-center items-center md:p-12 sm:p-8 xs:p-4 border border-gray-300">
          <h1 className="text-primary md:text-3xl xs:text-2xl font-[Poppins-Bold] my-6">
            Send Us A Message
          </h1>
          <form className="w-full">
            <div className="relative flex justify-start items-center">
              <img
                src={email}
                alt="email-icon"
                className="absolute top-[20px] left-[15px]"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="        Your Email Address"
                className="w-full px-6 py-4 leading-6 text-primary text-sm font-[Poppins-Regular] border border-gray-200 outline-none"
              />
            </div>
            <textarea
              name="text"
              id="text"
              cols="30"
              rows="10"
              placeholder="How Can We Help?"
              className="my-8 w-full px-6 py-4 leading-6 text-primary text-sm font-[Poppins-Regular] border border-gray-200 outline-none"
            ></textarea>
            <div className="bg-primary w-full  text-center text-white md:text-base xs:text-sm font-[Poppins-Medium] px-8 py-3 rounded-full hover:bg-[#626fd3] duration-300 cursor-pointer">
              SUBMIT
            </div>
          </form>
        </div>
        <div className="basis-1/2 h-[600px] flex flex-col justify-center items-start md:p-16 sm:p-6 xs:p-4 border border-gray-300">
          <div className="flex justify-start items-start">
            <div className="text-secondary mr-8 hover:text-hoverBlue">
              <FaHome size={27} />
            </div>
            <div className="flex flex-col justify-start items-start mb-14">
              <p className="text-primary leading-6 md:text-xl xs:text-lg font-[Poppins-Regular] pb-3 hover:text-hoverBlue duration-300 cursor-pointer">
                Address
              </p>
              <p className="text-lightGray leading-6 md:text-base xs:text-sm font-[Poppins-Regular] hover:text-hoverBlue duration-300 cursor-pointer">
                Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018
                US
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start my-14">
            <div className="text-secondary mr-8 hover:text-hoverBlue">
              <FaPhone size={27} />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-primary leading-6 md:text-xl xs:text-lg font-[Poppins-Regular] pb-3 hover:text-hoverBlue duration-300 cursor-pointer">
                Lets Talk
              </p>
              <p className="text-lightGray leading-6 md:text-base xs:text-sm font-[Poppins-Regular] hover:text-hoverBlue duration-300 cursor-pointer">
                +1 800 1236879
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start my-14">
            <div className="text-secondary mr-8 hover:text-hoverBlue">
              <FaEnvelope size={27} />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-primary leading-6 md:text-xl xs:text-lg font-[Poppins-Regular] pb-3 hover:text-hoverBlue duration-300 cursor-pointer">
                Sale Support
              </p>
              <p className="text-lightGray leading-6 md:text-base xs:text-sm font-[Poppins-Regular] hover:text-hoverBlue duration-300 cursor-pointer">
                contact@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
