import { Link, useParams } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaAngleRight,
} from "react-icons/fa";
import { productsData, tabsData, relatedProductsData } from "../utils/data";
import { Modal, Products, Cart } from "../components";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  calculateTotal,
} from "../components/features/cart/cartSlice";
import { openModal } from "../components/features/modal/modalSlice";

const Product = () => {
  const { isCartOpen, cart } = useSelector((store) => store.cart);
  const { isModalOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const [tabs, setTabs] = useState(tabsData);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(1);
  const addCartBtnContainer = useRef(null);
  const { productId } = useParams();
  const newProduct = productsData.filter(
    (product) => product.id === parseInt(productId)
  );
  let inCart = false;
  const { id, brand, img, price, category } = newProduct[0];
  const cartItem = { id, brand, img, price, amount, inCart };
  const { content } = tabs[value];

  const checkInCart = (newItem) => {
    const checkCart = cart.find((item) => item.payload.id === newItem.id);
    if (checkCart) {
      addCartBtnContainer.current.textContent = "IN CART";
      addCartBtnContainer.current.disabled = true;
    } else {
      addCartBtnContainer.current.textContent = "IN CART";
      addCartBtnContainer.current.disabled = true;
    }
  };

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart, dispatch]);

  return (
    <section className="relative md:px-12 sm:px-8 xs:px-4">
      <div className="container mt-[7rem] mb-8">
        <div className="flex justify-start items-center text-xs text-primary font-[Poppins-Regular]">
          <Link to={"/shop"}>Shop</Link>
          <FaAngleRight size={15} />
          <Link to={"/shop"}>{category}</Link>
          <FaAngleRight size={15} />
          <p>{brand}</p>
        </div>
      </div>
      {isCartOpen && (
        <div>
          <Cart />
        </div>
      )}
      <div className="flex sm:flex-row xs:flex-col mb-16">
        <div className="flex justify-start items-start basis-[50%] sm:mr-20 xs:mb-8 sm:mb-0">
          {/* <div className="flex flex-col">
          </div> */}
          <img src={img} className="max-w-full" alt="product-img" />
        </div>
        <div className="flex flex-col justify-start items-start font-[Poppins-Regular]">
          <h2 className="md:text-2xl xs:text-lg text-secondary ">{brand}</h2>
          <p className="md:text-xl xs:text-base text-primary font-[Poppins-Medium] my-5">
            ${price}
          </p>
          <p className="md:text-sm xs:text-xs text-lightGray font-[Poppins-Regular]">
            Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.
            Mauris consequat ornare feugiat.
          </p>
          <div className="w-full flex flex-col justify-center items-center my-8">
            <div className="w-full flex justify-between items-center mb-6">
              <p className="w-1/2 pl-12 md:text-lg xs:text-sm text-secondary font-[Poppins-Regular]">
                Size
              </p>
              <div className="w-full md:text-sm xs:text-xs text-lightGray font-[Poppins-Regular]">
                <select
                  className="w-[75%] border border-gray-300 outline-none rounded-sm px-4 py-3"
                  name="time"
                >
                  <option>Choose an option</option>
                  <option>Size S</option>
                  <option>Size M</option>
                  <option>Size L</option>
                  <option>Size XL</option>
                </select>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="w-1/2 pl-12 md:text-lg xs:text-sm text-secondary font-[Poppins-Regular]">
                Color
              </p>
              <div className="w-full md:text-sm xs:text-xs text-lightGray font-[Poppins-Regular]">
                <select
                  className="w-[75%] border border-gray-300 outline-none rounded-sm px-4 py-3"
                  name="time"
                >
                  <option>Choose an option</option>
                  <option>Red</option>
                  <option>Blue</option>
                  <option>White</option>
                  <option>Grey</option>
                </select>
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-6 ">
              <p className="w-1/2 pl-12 md:text-lg xs:text-sm text-secondary font-[Poppins-Regular]">
                Quantity
              </p>
              <div className="w-full md:text-sm xs:text-xs text-secondary font-[Poppins-Regular]">
                <input
                  type="number"
                  className="w-[75%] border border-gray-300 outline-none rounded-sm px-4 py-3"
                  name="quantity"
                  id="quantity"
                  value={amount}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center my-4">
            <button
              type="button"
              className="bg-hoverBlue w-[50%] text-center text-white md:text-base xs:text-xs font-[Poppins-Medium] px-8 py-3 rounded-full hover:bg-[#626fd3] duration-300 cursor-pointer"
              ref={addCartBtnContainer}
              onClick={() => {
                dispatch(addToCart(cartItem));
                dispatch(openModal());
                checkInCart(cartItem);
              }}
            >
              {cartItem.inCart ? "IN CART" : "ADD TO CART"}
            </button>
          </div>
          <div className="w-full flex justify-center items-center mt-4 duration-300">
            <span>
              <FaFacebook
                size={20}
                className="text-secondary mr-7 hover:text-hoverBlue"
              />
            </span>
            <span>
              <FaInstagram
                size={20}
                className="text-secondary mr-7 hover:text-hoverBlue"
              />
            </span>
            <span>
              <FaPinterest
                size={20}
                className="text-secondary mr-7 hover:text-hoverBlue"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full border border-gray-200 rounded-md px-10 py-8 mb-20 duration-300">
        {tabs.map((tab, index) => {
          return (
            <button
              key={index}
              type="button"
              className={
                value === index
                  ? "md:text-base xs:text-sm font-[Poppins-Medium] xs:mr-12 xs:mb-6 sm:mb-0 text-hoverBlue"
                  : "text-lightGray md:text-base xs:text-sm font-[Poppins-Medium] xs:mr-12 xs:mb-6 sm:mb-0 hover:text-hoverBlue"
              }
              onClick={() => setValue(index)}
            >
              {tab.title}
            </button>
          );
        })}
        <p className="md:text-sm xs:text-xs leading-9 text-lightGray font-[Poppins-Regular] mt-6">
          {content}
        </p>
      </div>
      <div className="flex justify-center items-center bg-gray-200 my-4 py-6">
        <p className="md:text-sm xs:text-xs text-secondary font-[Poppins-Regular] mr-8">
          SKU: JAK-01
        </p>
        <p className="md:text-sm xs:text-xs text-secondary font-[Poppins-Regular]">
          {brand},{category}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center sm:my-16 xs:mb-4">
        <h1 className="text-primary md:text-4xl xs:text-2xl font-[Poppins-Bold] my-6">
          Related Products
        </h1>
        <div className="w-full grid gap-8 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1  my-8">
          {relatedProductsData.map((product, index) => {
            return <Products key={index} {...product} />;
          })}
        </div>
      </div>
      {isModalOpen && (
        <div>
          <Modal brand={brand} />
        </div>
      )}
    </section>
  );
};
export default Product;
