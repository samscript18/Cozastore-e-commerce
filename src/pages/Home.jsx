import { Button } from "../components";
import Shop from "../pages/Shop";
import { homeData } from "../utils/data";

const Home = () => {
  return (
    <section>
      <div className="w-full">
        <div className="bg-bgBanner bg-cover bg-center max-w-full flex flex-col justify-center items-start h-[calc(100vh-79px)] mt-[4.8rem] z-10">
          <div className="w-full md:px-12 sm:px-8 xs:px-4">
            <h1 className="text-primary md:text-3xl xs:text-xl font-[Poppins-Regular]">
              Brand Collection 2023
            </h1>
            <h1 className="text-primary md:text-6xl xs:text-4xl font-[PlayfairDisplay-Bold] my-8">
              NEW ARRIVALS
            </h1>
            <div className="w-[50%]">
              <Button text={"SHOP NOW"} />
            </div>
          </div>
        </div>
        <div className="md:px-12 sm:px-8 xs:px-4">
          <div className="flex sm:flex-row xs:flex-col justify items-start my-16">
            {homeData.map(({ img, category, season }, index) => {
              return (
                <div
                  key={index}
                  className={`relative border border-gray-200 md:mr-8 sm:mr-3 ${
                    index === homeData.length - 1 ? "md:mr-0 sm:mr-0" : ""
                  } xs:mb-8 sm:mb-0 cursor-pointer`}
                >
                  <div className="w-full">
                    <img src={img} className="max-w-full" alt="img" />
                  </div>
                  <div className="absolute top-[7%] left-[7%]">
                    <h1 className="text-primary md:text-3xl xs:text-2xl font-[Poppins-Bold]">
                      {category}
                    </h1>
                    <p className="text-secondary md:text-sm xs:text-xs font-[Poppins-Regular] pt-2">
                      {season}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h1 className="text-primary md:text-4xl xs:text-2xl font-[Poppins-Bold] md:mt-12 xs:mt-1 -mb-20">
              PRODUCTS OVERVIEW
            </h1>
          </div>
        </div>
        <div className="w-full">
          <Shop />
        </div>
      </div>
    </section>
  );
};
export default Home;
