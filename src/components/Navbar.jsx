import { logo01 } from "../assets/export";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";
import {
  MdOutlineSearch,
  MdShoppingCart,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import { useState } from "react";
import { navLinks } from "../utils/data";
import { openCart } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const { amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <nav className="sm:w-full xs:w-[100vw] bg-white md:px-12 sm:px-8 xs:px-4 py-6 fixed top-0 left-0 sm:shadow-sm xs:shadow-md z-10">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center">
          <span className="mr-[5rem]">
            <img src={logo01} className="max-w-full" alt="nav-logo" />
          </span>
          <ul className="flex justify-center items-center font-[Poppins-Medium] md:text-sm xs:text-xs xs:hidden sm:flex">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-hoverBlue md:mr-8 sm:mr-4"
                    : "text-primary md:mr-8 sm:mr-4 hover:text-hoverBlue"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) =>
                  isActive
                    ? "text-hoverBlue md:mr-8 sm:mr-4"
                    : "text-primary md:mr-8 sm:mr-4 hover:text-hoverBlue"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/features"}
                className={({ isActive }) =>
                  isActive
                    ? "text-hoverBlue md:mr-8 sm:mr-4"
                    : "text-primary md:mr-8 sm:mr-4 hover:text-hoverBlue"
                }
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  isActive
                    ? "text-hoverBlue md:mr-8 sm:mr-4"
                    : "text-primary md:mr-8 sm:mr-4 hover:text-hoverBlue"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "text-hoverBlue md:mr-8 sm:mr-4"
                    : "text-primary md:mr-8 sm:mr-4 hover:text-hoverBlue"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "text-hoverBlue"
                    : "text-primary hover:text-hoverBlue"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <span>
            <MdOutlineSearch
              size={30}
              className="text-primary md:mr-7 sm:mr-4 hover:text-hoverBlue cursor-pointer xs:hidden sm:flex"
            />
          </span>
          <span>
            <MdShoppingCart
              size={27}
              onClick={() => dispatch(openCart())}
              className="relative text-primary md:mr-7 sm:mr-4 hover:text-hoverBlue cursor-pointer"
            />
            <span>
              <p className="absolute top-[15%] lg:right-[6.2%] md:right-[8.5%] sm:right-[8.5%] xs:right-[15%] md:w-[26px] md:h-[26px] xs:w-[20px] xs:h-[20px] bg-hoverBlue text-white md:text-sm xs:text-xs font-[Poppins-Regular] flex justify-center items-center rounded-full">
                {amount}
              </p>
            </span>
          </span>
          <span>
            <MdOutlineFavoriteBorder
              size={27}
              className="text-primary hover:text-hoverBlue cursor-pointer xs:hidden sm:flex"
            />
          </span>
          <div className="sm:hidden">
            {openNavbar ? (
              <AiOutlineClose
                size={27}
                className="text-primary ml-6 cursor-pointer"
                onClick={() => setOpenNavbar(false)}
              />
            ) : (
              <RiMenu3Line
                size={27}
                className="text-primary ml-6 cursor-pointer"
                onClick={() => setOpenNavbar(true)}
              />
            )}
          </div>
        </div>
      </div>
      {openNavbar && (
        <div className="w-[40%] h-auto absolute top-[80%] right-[5%] bg-hoverBlue py-4 px-2 z-10 scale-up-center rounded-md shadow-md">
          <ul className="flex flex-col justify-center items-center">
            {navLinks.map(({ id, title }) => {
              return (
                <li
                  key={id}
                  className="text-[17px] pt-3 pb-2 font-[Poppins-Medium] cursor-pointer"
                >
                  <NavLink
                    to={`/${id}`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }
                    onClick={() => setOpenNavbar(false)}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
