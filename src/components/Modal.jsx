import { closeModal } from "./features/modal/modalSlice";
import { useDispatch } from "react-redux";

const Modal = ({ brand }) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed w-full h-full inset-0 bg-primary bg-opacity-50 flex items-center justify-center my-0">
      <div className="md:w-[40vw] sm:w-[55vw] xs:w-[75vw] top-[50%] right-[50%] bg-white p-10 rounded shadow-md">
        <div className="flex flex-col justify-center items-center">
          <p className="text-primary md:text-xl xs:text-lg font-[Poppins-Bold] my-2">
            {brand}
          </p>
          <p className="text-lightGray md:text-base xs:text-sm text-center font-[Poppins-Regular] my-2">
            has been successfully added to cart
          </p>
        </div>
        <div className="flex justify-end items-end mt-4">
          <button
            id="closeModal"
            className="mt-4 bg-hoverBlue text-white md:text-base xs:text-sm font-[Poppins-Regular] py-2 px-8 rounded"
            onClick={() => dispatch(closeModal())}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
