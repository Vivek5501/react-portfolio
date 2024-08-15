import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        Hi, I'm Vivek,
        A computer science student at ABES Engineering College. I work with MERN Stack, C++, Data Structures, and Competitive Programming, passionate about problem-solving and exploring new technologies. Eager to contribute to innovative projects and collaborate with industry professionals. Let's connect and explore opportunities together!
      
        <br></br>
        <br></br>
        As a highly motivated and dedicated computer science student, my primary goal is to excel in my field by joining an esteemed organization that fosters innovation and offers opportunities for professional growth. I am eager to contribute my strong problem-solving and programming skills to a dynamic team that works efficiently towards the organization's growth and success.
        </p>

       
      </div>
    </div>
  );
};

export default About;