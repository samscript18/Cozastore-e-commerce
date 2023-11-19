import { productsData } from "../utils/data";
import { useState } from "react";
import { Products } from "../components";
// import { useGlobalContext } from "../components/Context";
import { Cart } from "../components";
import { useSelector } from "react-redux";

const allCategories = [
  "All Products",
  ...new Set(productsData.map((product) => product.category)),
];

const Shop = () => {
  const [products, setProducts] = useState(productsData);
  const [active, setActive] = useState(false);
  const [categories] = useState(allCategories);

  const { isCartOpen } = useSelector((store) => store.cart);

  const filterProducts = (category) => {
    if (category === "All Products") {
      setProducts(productsData);
      return;
    }
    const newProducts = productsData.filter(
      (product) => product.category === category
    );
    setProducts(newProducts);
  };
  const setIndex = (index) => {
    setActive(active === index ? null : index);
  };

  const updateBtn = (category, index) => {
    setIndex(index);
    filterProducts(category);
  };

  return (
    <section className="md:mt-[8rem] xs:mt-[7rem] mb-16 md:px-16 sm:px-8 xs:px-4">
      {isCartOpen && (
        <div>
          <Cart />
        </div>
      )}
      <div className="w-full flex justify-center items-center">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={() => updateBtn(category, index)}
              className={
                active === index
                  ? "md:text-base xs:text-sm font-[Poppins-Medium] sm:mr-12 xs:mr-4 text-hoverBlue"
                  : "text-lightGray md:text-base xs:text-sm font-[Poppins-Medium] sm:mr-12 xs:mr-4 hover:text-hoverBlue"
              }
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="w-full grid gap-8 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 mt-16">
        {products.map((product, index) => {
          return <Products key={index} {...product} />;
        })}
      </div>
      <div className="flex justify-center items-center my-6">
        <div className="bg-lightGray lg:w-[15%] md:w-[25%] text-center text-white md:text-base xs:text-sm font-[Poppins-Medium] px-8 py-3 rounded-full hover:bg-primary duration-300 cursor-pointer">
          LOAD MORE
        </div>
      </div>
    </section>
  );
};
export default Shop;
