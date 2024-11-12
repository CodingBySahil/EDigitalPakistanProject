// COMPONENT START
export default function CartSummary() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <section className="rounded-[8px] bg-brand-color-lightBlue/30 p-[10px]">
      {/* header */}
      <header>
        <h6 className="m-[0px] font-medium tracking-wider">Summary</h6>
      </header>

      {/* body */}
      <div>
        {/* all courses selected */}
        <section className="flex">
          <ul className="flex w-[100%] list-none flex-col gap-[10px] pl-[0px]">
            <li className="h-[70px] rounded-[5px] bg-slate-300">course 1</li>
            <li className="h-[70px] rounded-[5px] bg-slate-300">course 1</li>
          </ul>
        </section>

        {/* totals */}
        <section className="h-[140px] rounded-[5px] bg-slate-300/70">
          totals
        </section>
      </div>
    </section>
  );
  // JSX
}
// COMPONENT END
