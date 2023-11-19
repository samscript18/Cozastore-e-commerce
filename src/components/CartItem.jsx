// import { useGlobalContext } from "./Context";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { removeItem, increase, decrease } from "./features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, brand, img, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="w-full my-8">
      <div className="flex">
        <img
          src={img}
          className="w-[80px] h-[80px] object-contain"
          alt="item-img"
        />
        <div className="flex flex-col justify-center items-start ml-4">
          <h4 className="text-secondary lg:text-base xs:text-xs font-[Poppins-Regular]">
            {brand}
          </h4>
          <h4 className="text-secondary lg:text-base xs:text-xs font-[Poppins-Regular] lg:mt-4 lg:mb-2 xs:mt-3 xs:mb-1">
            ${price}
          </h4>
          <button
            className="text-secondary hover:text-hoverBlue md:text-sm xs:text-xs font-[Poppins-Regular]"
            onClick={() => dispatch(removeItem(id))}
          >
            remove
          </button>
        </div>
        <div className="flex flex-col ml-10">
          <span>
            <MdArrowDropUp
              size={27}
              className="text-secondary cursor-pointer"
              onClick={() => dispatch(increase({ id }))}
            />
          </span>
          <p className="text-primary md:text-base xs:text-sm font-[Poppins-Regular] text-center">
            {amount}
          </p>
          <span>
            <MdArrowDropDown
              size={27}
              className="text-secondary cursor-pointer"
              onClick={() => {
                if (amount === 1) {
                  dispatch(removeItem(id));
                  return;
                }
                dispatch(decrease({ id }));
              }}
            />
          </span>
        </div>
      </div>
    </article>
  );
};
export default CartItem;
