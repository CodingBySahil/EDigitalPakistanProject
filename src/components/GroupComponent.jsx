import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full  mx-auto text-left text-lg  text-darkslateblue-100 font-poppins ${className}`}
    >
      {/* text section */}
      <div className="relative w-full">
        <div className="text-3xl font-bold">
          <span>Self-assessments, </span>
          <span className="text-turquoise">Quizzes</span>
          <span>, Tests, </span>
          <span className="text-lightseagreen">Exams</span>

          <p className="text-2xl font-semibold mb-4">
            Encourage students to regularly self-assess their understanding of
            the material, reflecting on their learning process and adjusting
            their study plans as needed.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Decorative Elements */}
        {/* <div className="flex justify-center items-center space-x-4">
          <div className="rounded-full bg-mediumspringgreen-200 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"></div>
          <div className="rounded-full bg-hotpink w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"></div>
          <div className="rounded-full bg-royalblue w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"></div>
          <div className="rounded-full bg-sandybrown w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"></div>
        </div> */}

        {/* Main Content Section */}
        <div className="flex flex-col items-center justify-between bg-white shadow-lg rounded-lg p-6  relative">
          <h4 className="text-steelblue rounded-full text-xl font-medium  bg-lightsteelblue-100 px-4 py-2">
            Question 1
          </h4>
          <p className="text-lg mb-4">
            True or false? Are plants living things?
          </p>
          {/* main image */}
          <img
            className="w-full h-auto object-cover"
            alt=""
            src="/mask-group-1@2x.png"
          />
          {/* Decorative Images */}
          <img
            className="w-24 h-auto object-contain absolute z-50 top-0 right-0"
            alt=""
            src="/group-90@2x.png"
          />
          <img
            className="w-24 h-auto object-contain absolute z-50"
            alt=""
            src="/group-88@2x.png"
          />
        </div>

        {/* Additional Decorative Elements */}
        <div className="flex justify-center items-center"></div>
        <div className="flex justify-center items-center">
          <div className="relative rounded-full bg-whitesmoke w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24">

            {/* this image is not for this component */}
            {/* <img
              className="absolute inset-0 w-full h-full object-contain"
              alt=""
              src="/group-69.svg"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
