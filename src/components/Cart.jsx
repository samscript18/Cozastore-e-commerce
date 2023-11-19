import CartContainer from "./CartContainer";

const Cart = () => {
  return (
    <div className="fixed w-full h-full inset-0 bg-primary bg-opacity-50 flex items-end justify-end z-10">
      <div className="md:w-[35vw] sm:w-[45vw] xs:w-[100%] h-full top-0 right-0 bg-white text-primary p-10 rounded-l-md shadow-md overflow-y-scroll">
        <CartContainer />
      </div>
    </div>
  );
};
export default Cart;
