import { useState } from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import InAppHeader from "../components/InAppHeader";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How to create an account?",
      answer:
        "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
    },
    {
      question: "Have any trust issue?",
      answer:
        "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.",
    },
    {
      question: "What is the payment process?",
      answer:
        "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <InAppHeader />
      <section className="mt-7 bg-gray-300 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-full flex-col items-center justify-center gap-x-16 gap-y-5 max-lg:max-w-2xl lg:flex-row lg:justify-between xl:gap-28">
            <div className="w-full lg:w-1/2">
              <img
                src="girl.png"
                alt="FAQ section"
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-xl">
                <div className="mb-6 lg:mb-16">
                  <h6 className="text-lg mb-2 text-center font-medium text-indigo-600 lg:text-left">
                    FAQs
                  </h6>
                  <h2 className="text-4xl mb-5 text-center font-bold leading-[3.25rem] text-gray-800 lg:text-left">
                    Looking for answers?
                  </h2>
                </div>
                <div className="accordion-group">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`accordion border-b border-solid border-gray-200 py-8 ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >
                      <button
                        className="accordion-toggle group inline-flex w-full items-center justify-between text-xl font-normal leading-8 text-gray-800 transition duration-500 hover:text-indigo-600"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeIndex === index}
                      >
                        <h5>{faq.question}</h5>
                        <svg
                          className={`text-gray-800 transition duration-500 group-hover:text-indigo-600 ${
                            activeIndex === index ? "rotate-180" : ""
                          }`}
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <div
                        className={`accordion-content w-full overflow-hidden px-0 pr-4 transition-all duration-500 ${
                          activeIndex === index ? "max-h-[500px]" : "max-h-0"
                        }`}
                      >
                        <p className="text-base font-normal text-gray-800">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQPage;
