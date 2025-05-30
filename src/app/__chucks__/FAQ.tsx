import React from "react";

const FAQ = () => {
  return (
    <section className="mt-[180] mb-[152] px-6">
      <div className="max-w-[522] m-auto">
        <h3 className="text-[39px] font-medium leading-[1.2] text-center mb-8">
          Frequently asked <br /> Questions
        </h3>
        <ul className="flex flex-col gap-4">
          {[
            "Is TC&P free to use?",
            "Who can join TC&P?",
            "How do I find and connect with professionals?",
            "Can I post job opportunities?",
            "How does TC&P protect my privacy?",
            "What makes TC&P different from other professional networks?",
          ].map((val) => {
            return (
              <li
                key={val}
                className="py-4 px-6 border-[#E2E8F0] border rounded-2xl bg-[#F8FAFC] flex  items-center justify-between"
              >
                <span> {val}</span> <span className="font-medium">+</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
