"use client"
import React,{useState, useTransition} from "react"
import Image from "next/image"
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>JavaScript</li>
          <li>React</li>
          <li>Next</li>
          <li>Node.js</li>
          <li>C++</li>
          <li>Figma</li>
          <li>Blockchain</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Rustamji Institute of Technology - B.Tech</li>
          <li>Ramshree Public School - 12th</li>
          <li>Morning Star Public School - 10th</li>
        </ul>
      ),
    }
  ];
  


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };

  return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.png" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                I am a frontend developer and UI & UX developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next, Redux, Node.js, API, HTML5, CSS3, Tailwind(Framework), Bootstrap(Framework), Figma and Git. 
            I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
                </p>
                <div className="flex flex-row justify-start gap-8 mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection