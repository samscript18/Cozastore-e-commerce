import { about01, about02 } from "../assets/export";

const About = () => {
  return (
    <section>
      <div className="bg-aboutBanner bg-cover bg-center mt-[4rem]">
        <div className="w-full h-[200px] flex justify-center items-center mb-[4rem]">
          <h1 className="text-white md:text-5xl xs:text-4xl font-[Poppins-Bold]">
            About
          </h1>
        </div>
      </div>
      <div className="w-full my-16 md:px-16 sm:px-8 xs:px-4">
        <div className="flex sm:flex-row xs:flex-col justify-between items-start">
          <div className="lg:max-w-[700px] md:max-w-[500px] sm:max-w-[350px] sm:mr-16">
            <h2 className="text-[#222] text-2xl font-[Poppins-Bold] mb-6">
              Our Story
            </h2>
            <p className="text-lightGray xs:leading-6 md:text-sm xs:text-xs font-[Poppins-Light]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              consequat consequat enim, non auctor massa ultrices non. Morbi sed
              odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Maecenas varius egestas diam, eu sodales metus
              scelerisque congue. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Maecenas gravida
              justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
              ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
              vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
              condimentum euismod tortor, eget facilisis diam faucibus et. Morbi
              a tempor elit.
            </p>
            <p className="text-lightGray xs:leading-6 md:text-sm xs:text-xs font-[Poppins-Light] md:my-10 xs:my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              consequat consequat enim, non auctor massa ultrices non. Morbi sed
              odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Maecenas varius egestas diam, eu sodales metus
              scelerisque congue. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Maecenas gravida
              justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
              ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt
              vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec
              condimentum euismod tortor, eget facilisis diam faucibus et. Morbi
              a tempor elit.
            </p>
            <p className="text-lightGray xs:leading-6 md:text-sm xs:text-xs font-[Poppins-Regular]">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
          </div>
          <div className="about-1 sm:overflow-visible xs:overflow-hidden xs:mt-8 sm:mt-0">
            <div className="full overflow-hidden">
              <img
                src={about01}
                className="max-w-full hover:scale-[1.023] duration-300"
                alt="about-img"
              />
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row xs:flex-col justify-between items-start mt-16">
          <div className="about-1 sm:overflow-visible xs:overflow-hidden">
            <div className="w-full overflow-hidden">
              <img
                src={about02}
                className="max-w-full hover:scale-[1.023] duration-300"
                alt="about-img"
              />
            </div>
          </div>
          <div className="lg:max-w-[700px] md:max-w-[500px] sm:max-w-[350px] sm:ml-16 xs:mt-12 sm:mt-0">
            <h2 className="text-[#222] text-2xl font-[Poppins-Bold] mb-6">
              Our Mission
            </h2>
            <p className="text-lightGray xs:leading-6 md:text-sm xs:text-xs font-[Poppins-Light]">
              Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum
              rhoncus dignissim risus, sed consectetur erat. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Nullam maximus mauris sit amet odio convallis, in
              pharetra magna gravida. Praesent sed nunc fermentum mi molestie
              tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas,
              luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat
              odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in,
              porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec
              venenatis nulla lobortis. Proin at gravida ante. Mauris auctor
              purus at lacus maximus euismod. Pellentesque vulputate massa ut
              nisl hendrerit, eget elementum libero iaculis.
            </p>
            <div className="flex justify-center items-center md:mt-10 xs:mt-6">
              <div className="h-[110px] border-l-2 border-gray-300 mr-8"></div>
              <div className="flex flex-col">
                <p className="text-lightGray xs:leading-6 md:text-sm xs:text-xs font-[Poppins-Italic]">
                  Creativity is just connecting things. When you ask creative
                  people how they did something, they feel a little guilty
                  because they didn't really do it, they just saw something. It
                  seemed obvious to them after a while.
                </p>
                <span className="md:text-sm xs:text-xs text-lightGray xs:leading-6 font-[Poppins-Regular] mt-2">
                  - Steve Job’s{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
