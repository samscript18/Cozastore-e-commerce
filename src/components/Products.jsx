import { HiOutlineHeart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Products = ({ id, img, brand, price }) => {
  return (
    <div
      key={id}
      className="relative flex flex-col justify-start items-start scale-up-center overflow-hidden card"
    >
      <div className="w-full overflow-hidden">
        <img
          src={img}
          className="max-w-full hover:scale-[1.1] duration-1000"
          alt={brand}
        />
        <div className="absolute bottom-0 lg:left-[30%] md:left-[20%] sm:left-[22%] xs:left-[32%] flex justify-center items-center bg-white hover:bg-primary hover:text-white md:p-3 xs:p-3 rounded-full w-[120px] text-primary md:text-sm xs:text-xs font-[Poppins-Regular] text-center opacity-0 -z-10 quick-view">
          <Link to={`/shop/${id}`}>Quick View</Link>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <Link
          to={`/shop/${id}`}
          className="text-lightGray mt-3 md:text-sm xs:text-xs font-[Poppins-Regular] hover:text-hoverBlue cursor-pointer"
        >
          {brand}
        </Link>
        <HiOutlineHeart
          size={20}
          className="text-lightGray hover:fill-hoverBlue hover:text-hoverBlue cursor-pointer"
        />
      </div>
      <p className="text-secondary mt-2 mb-4 md:text-sm xs:text-xs font-[Poppins-Regular]">
        ${price}
      </p>
    </div>
  );
};
export default Products;
