import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the Smart India Hackathon?",
      answer: "Smart India Hackathon is an initiative by the Government of India aimed at addressing pressing problems faced by government departments and private organizations through innovative solutions developed by students."
    },
    {
      question: "When did the Smart India Hackathon start?",
      answer: "The Smart India Hackathon started in 2017."
    },
    {
      question: "Who can submit problem statements in this hackathon?",
      answer: "Any Indian student or faculty member can submit problem statements."
    },
    {
      question: "Can an individual in India, such as someone working in a private company, pose a challenge or submit a problem statement? What are the financial implications?",
      answer: "Yes, individuals can submit problem statements. There may be certain financial implications, which are handled on a case-by-case basis."
    },
    {
      question: "Can a university or institute submit PS under SIH 2024?",
      answer: "Yes, universities and institutes can submit problem statements under SIH 2024."
    },
    {
      question: "Can a student from distance/part-time education program participate in SIH 2024?",
      answer: "Yes, students from distance or part-time education programs can participate."
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto m-5 p-5" id='FAQ'>
      <h2 className="text-3xl flex justify-center items-center font-semibold text-orange-600 mb-6">General FAQ'S </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-200">
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full text-left p-4 bg-white flex justify-between items-center"
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <span className="text-lg">
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-4 text-gray-900 bg-gray-200 font-mono">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
