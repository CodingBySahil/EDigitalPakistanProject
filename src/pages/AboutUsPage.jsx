import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import InAppHeader from "../components/InAppHeader";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <InAppHeader />
      <section className="relative py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-12 lg:grid-cols-2">
            {/* Images Section */}
            <div className="order-last grid w-full grid-cols-1 items-start justify-center gap-6 sm:grid-cols-2 lg:order-first">
              <div className="flex items-start justify-start gap-2.5 pt-24 sm:justify-end lg:justify-center">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="Students Collaborating"
                />
              </div>
              <img
                className="ml-auto rounded-xl object-cover sm:ml-0"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="Teacher Explaining Concept"
              />
            </div>

            {/* Content Section */}
            <div className="inline-flex w-full flex-col items-center justify-center gap-10 lg:items-start">
              <div className="flex w-full flex-col items-start justify-center gap-8">
                <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                  <h2 className="text-4xl font-manrope text-center font-bold leading-normal text-gray-900 lg:text-start">
                    Empowering Minds Through Education
                  </h2>
                  <p className="text-center text-base font-normal leading-relaxed text-gray-500 lg:text-start">
                    Our mission is to create a collaborative learning
                    environment that fosters growth, curiosity, and innovation.
                    Through quality resources, dedicated educators, and
                    community support, we help learners achieve their goals and
                    unlock their true potential.
                  </p>
                </div>
                <div className="inline-flex w-full items-center justify-center gap-5 sm:gap-10 lg:justify-start">
                  <div className="inline-flex flex-col items-start justify-start">
                    <h3 className="text-4xl font-manrope font-bold leading-normal text-gray-900">
                      10+
                    </h3>
                    <h6 className="text-base font-normal leading-relaxed text-gray-500">
                      Years of Excellence
                    </h6>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start">
                    <h4 className="text-4xl font-manrope font-bold leading-normal text-gray-900">
                      500+
                    </h4>
                    <h6 className="text-base font-normal leading-relaxed text-gray-500">
                      Courses Offered
                    </h6>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start">
                    <h4 className="text-4xl font-manrope font-bold leading-normal text-gray-900">
                      1M+
                    </h4>
                    <h6 className="text-base font-normal leading-relaxed text-gray-500">
                      Happy Learners
                    </h6>
                  </div>
                </div>
              </div>
              {/* Call to Action */}
              <Link
                to={"/faq"}
                className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 no-underline shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit"
              >
                <span className="text-sm px-1.5 font-medium leading-6 text-white">
                  Read More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
