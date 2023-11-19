import { FaArrowRight } from "react-icons/fa";

const Article = ({ date, img, title, text }) => {
  return (
    <div className="w-full relative flex flex-col mt-4 sm:mb-[6rem] xs:mb-[3.2rem] overflow-hidden">
      <div className="w-full overflow-hidden">
        <div className="absolute top-[10px] left-[8px] bg-gray-100 w-[80px] h-[80px] flex flex-col justify-center items-center z-[5]">
          <span className="text-primary md:text-3xl xs:text-2xl font-[Poppins-Bold]">
            {date}
          </span>
          <h1 className="text-lightGray sm:text-sm xs:text-xs font-[Poppins-Regular]">
            JAN 2018
          </h1>
        </div>
        <div className="w-full hover:scale-[1.023] duration-1000">
          <img
            src={img}
            className="max-w-full object-cover cursor-pointer"
            alt="blog-img"
          />
        </div>
      </div>
      <h1 className="text-primary md:text-3xl xs:text-2xl font-[Poppins-Bold] my-6">
        {title}
      </h1>
      <p className="text-lightGray xs:leading-6 md:text-sm xs:text-xs font-[Poppins-Light]">
        {text}
      </p>
      <div className="flex justify-between items-center mt-7">
        <div className="flex flex-col w-full">
          <p className="text-primary leading-6 md:text-sm xs:text-xs font-[Poppins-Light]">
            <span className="text-lightGray">By</span> Admin{" "}
            <span className="text-lightGray px-2">|</span> StreetStyle, Fashion,
            Couple <span className="text-lightGray px-2">|</span>8 Comments
          </p>
        </div>
        <div className="w-full flex justify-end items-center font-[Poppins-Medium] text-primary md:text-sm xs:text-xs hover:text-hoverBlue duration-300 cursor-pointer">
          <p className="mr-4">CONTINUE READING</p>
          <span>
            <FaArrowRight size={15} />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Article;
