import { Link } from "react-router-dom";
import { brandColorCyan } from "../constants/brandColors";

// COMPONENT START
export default function SubjectCardDisplay({ cardsArr }) {
  


  return (
    <section className="grid grid-cols-1 tabS:grid-cols-2 laptop14:grid-cols-4 gap-8 laptop14:gap-[60px]">
      {cardsArr.map((val, index) => (
        <div
          id={`subjectCard${index}`}
          key={index}
          style={{ border: `1px solid ${brandColorCyan}` }}
          className="min-h-[400px] bg-brand-color-cyan/40 p-[8px] grid grid-rows-[300px_1fr_50px] rounded-[8px]"
        >
          {/* Image Section */}
          <section className="bg-lightsteelblue-200 rounded-[5px]">
            <img
              src={`book-1@2x.png`}
              alt={val?.title}
              className="w-full h-full object-cover object-top rounded-[5px]"
            />
          </section>

          {/* Title Section */}
          <section className="min-h-[50px] mt-[5px] min-w-[200px]">
            <p className="text-[17px] font-bold break-words">{val?.title}</p>
          </section>

          {/* Button Section */}
          <section className="flex items-center justify-end">
            <button className="px-[10px] py-[10px] cursor-pointer rounded-[5px] bg-brand-color-cyan active:bg-brand-color-cyan/80">
              <Link
                className="text-[16px] no-underline text-white"
                to={`/administration/${val?.code}`}
              >
                Upload content
              </Link>
            </button>
          </section>
        </div>
      ))}
    </section>
  );
}
// COMPONENT END
