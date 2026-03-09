import React, { useState } from "react";

const faqLinks = {
  tracks: "/Agrigegen-conference-tracks/",
  abstractSubmission: "/abstract-submission",
  schedule: "/Agrigegen-event-schedule",
  email: "mailto:hello@helixconferences.com",

};

export const faqData = [
  {
    question: "What is AGRIREGEN-2027?",
    answer:
      "AGRIREGEN-2027, officially titled the “Regenerative AgriTech Forum”, is a premier international conference organized by Helix Conferences. It brings together agritech innovators, regenerative agriculture experts, researchers, policy makers, and industry leaders to discuss sustainable farming, soil health, climate-smart agriculture, agri-biotech, and future food systems.",
  },
  {
    question: "When and where will AGRIREGEN-2027 take place?",
    answer:
      "AGRIREGEN-2027 will be held on Apr 26–27, 2027, in Barcelona, Spain.",
  },
  {
    question: "What are the highlights of AGRIREGEN-2027?",
    answer:
      "Keynote presentations, expert-led technical sessions, regenerative agriculture case studies, agri-innovation showcases, panel discussions, and global networking opportunities.",
  },
  {
    question: "What conference tracks are featured at AGRIREGEN-2027?",
    answer: (
      <>
        You can explore the full list of tracks here:{" "}
        <a
          href={faqLinks.tracks}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          AGRIREGEN-2027 Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I showcase my products or explore sponsorship options?",
    answer: (
      <>
        To exhibit your products or discuss sponsorship opportunities, please
        contact our team at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit an abstract for AGRIREGEN-2027?",
    answer: (
      <>
        You can submit your abstract{" "}
        <a
          href={faqLinks.abstractSubmission}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the email address provided during registration. Please check your inbox and spam folder.",
  },
  {
    question: "What materials will I receive during the event?",
    answer:
      "Registered participants will receive a digital conference kit including the forum agenda, speaker profiles, and session details.",
  },
  {
    question: "How long can I present my topic?",
    answer:
      "Oral presentations are typically 15–20 minutes long, including Q&A. Final presentation guidelines will be shared after abstract acceptance.",
  },
  {
    question: "Who will be attending AGRIREGEN-2027?",
    answer:
      "Agritech professionals, regenerative agriculture experts, farmers, researchers, sustainability leaders, policymakers, investors, and academicians from around the world.",
  },
  {
    question: "How many people usually attend the forum?",
    answer:
      "AGRIREGEN-2027 is expected to host 100+ international attendees, including speakers, delegates, exhibitors, and sponsors.",
  },
  {
    question: "Can I register for multiple speaking sessions?",
    answer:
      "Yes, speakers may submit multiple abstracts provided each submission covers a distinct topic.",
  },
  {
    question: "Are keynote speaking opportunities available?",
    answer:
      "Yes, a limited number of keynote speaker slots are available. Interested candidates should indicate their preference during abstract submission.",
  },
  {
    question: "What is expected of speakers?",
    answer:
      "Speakers are expected to deliver impactful presentations, share practical and research-based insights, and actively engage with participants.",
  },
  {
    question: "Is there a fee to participate as a speaker or attendee?",
    answer:
      "Yes, registration fees apply to all participants. Please visit the “Buy A Ticket” section on the website for detailed pricing information.",
  },
  {
    question: "How can I view the event schedule?",
    answer: (
      <>
        The detailed forum schedule will be released soon. You can view or
        download it{" "}
        <a
          href={faqLinks.schedule}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I preview the session list before the event?",
    answer:
      "Yes, the complete agenda, including session topics and speaker details, will be published ahead of the forum dates.",
  },
  {
    question: "Can I purchase tickets before the event day?",
    answer:
      "Yes, early registration is encouraged. Ticket availability may be limited closer to the event dates.",
  },
  {
    question: "How can I get assistance with accommodation?",
    answer: (
      <>
        For accommodation-related assistance, please reach out to us at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700 text-justify">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
