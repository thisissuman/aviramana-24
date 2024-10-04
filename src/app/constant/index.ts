import sports from "@/app/assets/sports.png";
import student from "@/app/assets/student.png";
import mentalhealth from "@/app/assets/mentalhealth.png";
import productivity from "@/app/assets/productivity.png";
import stress from "@/app/assets/stress.png";
import ptsd from "@/app/assets/ptsd.png";

const content = {
  imageOne: {
    title: "Pathway to Productivity",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, possimus aut.",
  },
  imageTwo: {
    title: "Unlock Your Potential",
    description:
      "Discover how resilience can help you thrive in challenging environments.",
  },
  imageThree: {
    title: "Stay Strong & Focused",
    description:
      "Resilience coaching to help you navigate life's most difficult moments.",
  },
};

const programmes = [
  {
    title: "Sports Coaching",
    image: sports,
    description:
      "A program designed to help sports persons enhance their mental resilience and handle pressure both on and off the field.",
  },
  {
    title: "Student Coaching",
    image: student,
    description:
      "This coaching program focuses on building resilience in students to help them overcome academic and personal challenges.",
  },
  {
    title: "Mental Awareness",
    image: mentalhealth,
    description:
      "A mental health awareness program aimed at educating and supporting young adults in managing stress, anxiety, and emotional well-being.",
  },
  {
    title: "Stress Seminars",
    image: productivity,
    description:
      "Tailored stress management seminars for senior executives to help them navigate high-pressure environments and maintain balance.",
  },
  {
    title: "NLP Productivity",
    image: stress,
    description:
      "This program uses Neuro-Linguistic Programming (NLP) techniques to improve productivity and focus in personal and professional life.",
  },
  {
    title: "PTSD Counseling",
    image: ptsd,
    description:
      "Specialized counseling for individuals suffering from PTSD, offering support and strategies for coping with post-traumatic stress.",
  },
];

export { content, programmes };
