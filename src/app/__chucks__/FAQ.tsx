"use client";
import React, { useState } from "react";

const FAQList = [
  {
    question: "Is TC&P free to use?",
    answer: "Yes, the TC&P is free to sign up to and use ",
  },
  {
    question: "Who can join TC&P?",
    answer:
      "Whether you’re a student exploring career options, a professional seeking to expand your network, or an organisation looking to attract top talent, this platform is your gateway to endless possibilities.",
  },
  {
    question: "How do I find and connect with professionals?",
    answer:
      "It's very simple, once you've signed up to become a member, the search bar at the side of the page allows you to search for people, jobs, posts, companies and industry groups. You can click any of the search suggestions that appear in the dropdown list as you type or generate your search to see the full results. To search for jobs, you can click the Jobs icon in the homepage and search for jobs in the Jobs homepage.",
  },
  {
    question: "Can I post job opportunities?",
    answer:
      "Yes, our streamlined approach to recruitment solutions allows for our Corporate Clients and partners to post vacancies on our job board giving our members exclusive access to roles that become available on the market.",
  },
  // {
  //   question: "How does TC&P protect my privacy?",
  //   answer: "",
  // },
  {
    question: "What makes TC&P different from other professional networks?",
    answer:
      "We are committed to adding value to both corporate clients and the individual by providing tailored solutions that drive growth, innovation, and success - no matter your industry or career stage.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="mt-[180] mb-[152] px-6">
      <div className="max-w-[522] m-auto">
        <h3 className="text-[39px] font-medium leading-[1.2] text-center mb-8">
          Frequently asked <br /> Questions
        </h3>
        <ul className="flex flex-col gap-4">
          {FAQList.map((item, i) => {
            return <FAQItem key={i} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
};

function FAQItem({ item }: { item: (typeof FAQList)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className={`py-4 px-6 cursor-pointer  ? "border-[${
        open ? "#020617" : "#E2E8F0"
      }]" 
       border rounded-2xl bg-[${open ? "#FFFFFF" : "#F8FAFC"}] `}
      onClick={() => setOpen((s) => !s)}
    >
      <div className="flex  items-center justify-between ">
        <span> {item.question}</span>
        <span className="font-medium">{open ? "-" : "+"}</span>
      </div>
      {open && <p className="text-[#334155] mt-3">{item.answer}</p>}
    </li>
  );
}
export default FAQ;
