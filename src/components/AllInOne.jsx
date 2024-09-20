import PropTypes from "prop-types";

const AllInOne = ({ className = "" }) => {
  return (
    <section className={`py-12 ${className} mt-80 md:mt-[28rem] lg:mt-[56rem]`} >
      <div className="text-center mb-10 px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900">
          How it <span className="text-green-500">Works</span>
        </h2>
        <p className="mt-4 text-dimgray max-w-2xl mx-auto">
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 px-4 md:px-6 lg:px-8">
        {/* Card 1 */}
        <div className="bg-whitesmoke text-dimgray shadow-lg rounded-lg p-6 md:p-8 lg:p-10 text-center flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-center mb-4">
              <img
                className="w-[6.25rem] h-[6.25rem] md:w-[8rem] md:h-[8rem] lg:w-[10rem] lg:h-[10rem]"
                alt=""
                src="/group-80.svg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 ">
              Select the Grade/Class that you are in.
            </h3>
            <p>
              You can select any grade that you want to study in. We offer
              flexibility for all.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-whitesmoke text-dimgray shadow-lg rounded-lg p-6 md:p-8 lg:p-10 text-center flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-center mb-4">
              <img
                className="w-[6.25rem] h-[6.25rem] md:w-[8rem] md:h-[8rem] lg:w-[10rem] lg:h-[10rem]"
                alt=""
                src="/group-81.svg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 ">
              Study the textbooks at your own pace with flexibility.
            </h3>
            <p>
              You can study any course, any topic at your convenience. In each
              topic, you can do exercises, reading, pronunciation, word
              meanings, etc.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-whitesmoke text-dimgray shadow-lg rounded-lg p-6 md:p-8 lg:p-10 text-center flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-center mb-4">
              <img
                className="w-[6.25rem] h-[6.25rem] md:w-[8rem] md:h-[8rem] lg:w-[10rem] lg:h-[10rem]"
                alt=""
                src="/group-79.svg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 ">
              Pay for the additional lessons - if you like it
            </h3>
            <p>
              The first lesson is free - pay for the rest with EasyPaisa. This
              will help us add more content and subjects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

AllInOne.propTypes = {
  className: PropTypes.string,
};

export default AllInOne;
