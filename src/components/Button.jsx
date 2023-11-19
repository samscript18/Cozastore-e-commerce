const Button = ({ text }) => {
  return (
    <div className="bg-hoverBlue lg:w-[50%] md:w-[100%] text-center text-white lg:text-base md:text-sm xs:text-xs  font-[Poppins-Medium] px-8 py-3 rounded-full hover:bg-[#626fd3] duration-300 cursor-pointer">
      {text}
    </div>
  );
};
export default Button;
