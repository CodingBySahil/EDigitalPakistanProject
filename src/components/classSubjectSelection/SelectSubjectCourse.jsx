import FlexCenter from "../FlexCenter";
import Footer from "../Footer";
import Heading from "../Heading";
import InAppHeader from "../InAppHeader";
import LoadingSpinner from "../LoadingSpinner";
import LoadingSpinnerContainer from "../LoadingSpinnerContainer";
import SubjectCard from "../SubjectCard";
import { useGetAllSubjectClass } from "./useGetAllSubjectClass";
import { useGetClassNumberQuery } from "../../hooks/useGetClassNumberQuery";
import OnlineCoaching from "../OnlineCoaching";

// COMPONENT START
export default function SelectSubjectCourse() {
  // VARS
  const { dataClassSubject, statusClassSubjects } = useGetAllSubjectClass();
  const classNumber = useGetClassNumberQuery();

  console.log(dataClassSubject);

  // FUNCTIONS

  // JSX
  if (statusClassSubjects === "pending" && dataClassSubject.length === 0) {
    return (
      <LoadingSpinnerContainer>
        <LoadingSpinner />
      </LoadingSpinnerContainer>
    );
  }
  if (statusClassSubjects === "success") {
    return (
      <div className="grid h-[100vh] grid-rows-[50px_1fr] gap-[10px] overflow-x-hidden overflow-y-hidden">
        <InAppHeader />

        <main className="over grid grid-rows-[auto_1fr_auto_auto] gap-[10px] overflow-y-auto">
          <div className="px-[10px] laptop14:px-[20px]">
            <Heading>Select subject to view details</Heading>
          </div>

          <div>
            {dataClassSubject.length > 0 && (
              <>
                <div className="grid grid-cols-1 gap-[10px] px-[10px] tabS:grid-cols-2 tabS:gap-[20px] laptop14:grid-cols-3 laptop14:gap-[30px] laptop14:px-[20px]">
                  {dataClassSubject?.map((val, i) => (
                    <SubjectCard
                      key={i}
                      subjectName={val?.subjectName}
                      buttonText={"view details"}
                      buttonUrl={`/course-calender?class-number=${classNumber}&subject-name=${val?.subjectName?.toLowerCase()}&subject-code=${val?.subjectCode}`}
                      imgPath={val?.subjectPic}
                    />
                  ))}
                </div>{" "}
              </>
            )}
            {dataClassSubject.length === 0 && (
              <>
                <FlexCenter>
                  <p>No data for class {classNumber}</p>
                </FlexCenter>
              </>
            )}
          </div>

          <div className="flex w-[100%] items-center justify-center py-[80px]">
            <OnlineCoaching />
          </div>

          <div>
            <Footer />
          </div>
        </main>
      </div>
    );
  }
  if (statusClassSubjects === "error") {
    <FlexCenter>
      <p>An error occured</p>
    </FlexCenter>;
  }

  // JSX
}
// COMPONENT END
