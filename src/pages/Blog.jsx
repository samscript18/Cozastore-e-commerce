import { Link } from "react-router-dom";
import { Article } from "../components";
import { archiveData, blogData, featuredProductsData } from "../utils/data";
import { MdOutlineSearch } from "react-icons/md";

const Blog = () => {
  return (
    <section>
      <div className="bg-blogBanner bg-cover bg-center mt-[4rem]">
        <div className="w-full h-[200px] flex justify-center items-center mb-[4rem]">
          <h1 className="text-white md:text-5xl xs:text-4xl font-[Poppins-Bold]">
            Blog
          </h1>
        </div>
      </div>
      <div className="flex sm:flex-row xs:flex-col-reverse justify-between sm:items-start xs:items-center md:px-12 sm:px-8 xs:px-4 mb-12">
        <div className="flex flex-col  md:max-w-[850px] md:mr-20 sm:mr-10">
          {blogData.map((details, index) => {
            return <Article key={index} {...details} />;
          })}
          <div className="flex">
            <Link
              to={"/blog"}
              className="w-[43px] border border-gray-200 text-white bg-secondary rounded-full mr-2 text-center"
            >
              <p className="text-base font-[Poppins-Regular] px-4 py-2">1</p>
            </Link>
            <Link
              to={"/blog"}
              className="w-[43px] border border-gray-200 text-lightGray text-center rounded-full hover:text-white hover:bg-secondary"
            >
              <p className="text-base font-[Poppins-Regular] px-4 py-2">2</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start relative">
          <div className="w-full flex justify-start items-start text-lightGray">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search"
              className="w-full px-6 py-4 leading-6 md:text-base xs:text-sm font-[Poppins-Regular] border border-gray-200 outline-none rounded-full"
            />
            <MdOutlineSearch
              size={23}
              className="absolute top-[17px] right-[15px] hover:text-hoverBlue"
            />
          </div>
          <div className="w-full flex flex-col my-8">
            <h1 className="text-primary md:text-2xl xs:text-xl font-[Poppins-Bold] my-6">
              Categories
            </h1>
            <p className="text-lightGray leading-6 md:text-base xs:text-sm font-[Poppins-Regular] py-3 border-y-[1px] border-gray-200 hover:text-hoverBlue duration-300 cursor-pointer">
              Fashion
            </p>
            <p className="text-lightGray leading-6 md:text-base xs:text-sm font-[Poppins-Regular] py-3 border-b-[1px] border-gray-200 hover:text-hoverBlue duration-300 cursor-pointer">
              Beauty
            </p>
            <p className="text-lightGray leading-6 md:text-base xs:text-sm font-[Poppins-Regular] py-3 border-b-[1px] border-gray-200 hover:text-hoverBlue duration-300 cursor-pointer">
              Street Style
            </p>
            <p className="text-lightGray leading-6 md:text-base xs:text-sm font-[Poppins-Regular] py-3 border-b-[1px] border-gray-200 hover:text-hoverBlue duration-300 cursor-pointer">
              Life Style
            </p>
            <p className="text-lightGray leading-6 md:text-base xs:text-sm font-[Poppins-Regular] py-3 border-b-[1px] border-gray-200 hover:text-hoverBlue duration-300 cursor-pointer">
              DIY & Crafts
            </p>
          </div>
          <div className="w-full flex flex-col my-8">
            <h1 className="text-primary md:text-2xl xs:text-xl font-[Poppins-Bold] my-6">
              Featured Products
            </h1>
            {featuredProductsData.map(({ id, img, price, details }) => {
              return (
                <div key={id} className="flex justify-start items-center my-6">
                  <div className="w-[60%]">
                    <img src={img} className="max-w-full" alt="product-img" />
                  </div>
                  <div className="w-full flex flex-col justify-start items-start">
                    <p className="text-secondary leading-6 md:text-base xs:text-sm font-[Poppins-Regular] pb-3 hover:text-hoverBlue duration-300 cursor-pointer">
                      {details}
                    </p>
                    <p className="text-lightGray leading-6 md:text-base xs:text-sm font-[Poppins-Regular] pb-3">
                      {price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full flex flex-col sm:my-8 xs:my-2">
            <h1 className="text-primary md:text-2xl xs:text-xl font-[Poppins-Bold] my-6">
              Archive
            </h1>
            {archiveData.map(({ id, date, amount }) => {
              return (
                <div
                  key={id}
                  className="w-full flex justify-start items-start text-lightGray hover:text-hoverBlue duration-300 cursor-pointer"
                >
                  <p className="w-full leading-6 md:text-base xs:text-sm font-[Poppins-Regular] pb-3">
                    {date}
                  </p>
                  <p className="leading-6 md:text-base xs:text-sm font-[Poppins-Regular] pb-3">
                    {amount}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full flex flex-col my-8">
            <h1 className="text-primary md:text-2xl xs:text-xl font-[Poppins-Bold] my-6">
              Tags
            </h1>
            <div className="flex flex-col justify-start items-start">
              <div className="flex justify-between items-center mb-2">
                <div className="border border-gray-200 mr-2 text-lightGray rounded-full hover:text-white hover:bg-hoverBlue">
                  <p className="md:text-sm xs:text-xs font-[Poppins-Regular] px-4 py-1">
                    Fashion
                  </p>
                </div>
                <div className="border border-gray-200 mr-2 text-lightGray rounded-full hover:text-white hover:bg-hoverBlue">
                  <p className="md:text-sm xs:text-xs font-[Poppins-Regular] px-4 py-1">
                    Lifestyle
                  </p>
                </div>
                <div className="border border-gray-200 text-lightGray rounded-full hover:text-white hover:bg-hoverBlue">
                  <p className="md:text-sm xs:text-xs font-[Poppins-Regular] px-4 py-1">
                    Denim
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="border border-gray-200 mr-2 text-lightGray rounded-full hover:text-white hover:bg-hoverBlue">
                  <p className="md:text-sm xs:text-xs font-[Poppins-Regular] px-4 py-1">
                    Street Style
                  </p>
                </div>
                <div className="border border-gray-200 text-lightGray rounded-full hover:text-white hover:bg-hoverBlue">
                  <p className="md:text-sm xs:text-xs font-[Poppins-Regular] px-4 py-1">
                    Crafts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
