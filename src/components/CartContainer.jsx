import CartItem from "./CartItem";
import { MdCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { closeCart, clearCart } from "./features/cart/cartSlice";

const CartContainer = () => {
  const { cart, total } = useSelector((store) => {
    return store.cart;
  });
  const dispatch = useDispatch();

  return (
    <section className="cart">
      <div className="w-full flex justify-between items-center mt-2 mb-16">
        <h2 className="text-primary text-xl font-[Poppins-Bold]">YOUR CART</h2>
        <MdCancel
          size={35}
          className="text-primary hover:text-hoverBlue cursor-pointer"
          onClick={() => dispatch(closeCart())}
        />
      </div>

      <div>
        {cart.map((item) => {
          return <CartItem key={item.payload.id} {...item.payload} />;
        })}
      </div>
      <div className="cart-total">
        <h4 className="text-primary md:text-xl xs:text-lg font-[Poppins-Regular] mt-4">
          Total: <span>${total.toFixed(2)}</span>
        </h4>
      </div>

      <div className="flex mt-10">
        <div
          className="bg-primary w-[50%] text-center text-white md:text-sm xs:text-xs font-[Poppins-Medium] px-4 py-2 rounded-full hover:bg-hoverBlue duration-300 cursor-pointer mr-6"
          onClick={() => dispatch(clearCart())}
        >
          CLEAR CART
        </div>
        <div className="bg-primary w-[50%] text-center text-white md:text-sm xs:text-xs font-[Poppins-Medium] px-4 py-2 rounded-full hover:bg-hoverBlue duration-300 cursor-pointer">
          CHECK OUT
        </div>
      </div>
    </section>
  );
};
export default CartContainer;
