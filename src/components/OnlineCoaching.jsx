import AppButton from "./AppButton";

const OnlineCoaching = () => {
  return (
    <div className="bg-brand-color-darkblue flex w-[80%] flex-col items-center justify-center gap-[30px] rounded-[20px] p-[20px] text-white tabS:p-[30px]">
      <div>
        <p className="text-[15px] font-bold tabS:text-[18px] laptop14:text-[22px]">
          Online coaching lessons for remote learning.
        </p>
      </div>
      <div>
        <p className="text-[11px] tabS:text-[14px] laptop14:text-[18px]">
          These lessons have been crafted in accordance with the standard
          Student Learning Outcomes (SLOs) outlined in the textbooks to align
          with the curriculum and enhance students learning. These materials are
          intended to supplement classroom teaching for enrolled students.
        </p>
      </div>
      <div>
        <AppButton>Start learning now</AppButton>
      </div>
    </div>
  );
};

export default OnlineCoaching;
