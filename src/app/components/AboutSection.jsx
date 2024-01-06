"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { comment } from "postcss";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Thai language</li>
        <li>English language</li>
        <li>Office 365</li>
        <li>Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          {" "}
          Bachelor of Engineering (Survey Engineering and Geographic
          Information) KASETSART UNIVERSITY
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Lua Scripting:Master complete Lua Programming from scratch</li>
      </ul>
    ),
  },
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
    /*explain*/
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="about-image.png"
          width={500}
          height={500}
          priority
          className=" hidden
            md:block  
            cursor-pointer
          "
          src="/images/about-image.png"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Starting from a childhood intrigue with coding, I've nurtured an
            enduring passion for programming throughout my life. Venturing into
            the realm of Information Engineering, I seamlessly integrate
            engineering principles with the art of information exploration. This
            ongoing journey not only fortifies my technical expertise but also
            fine-tunes my collaborative abilities within diverse teams.
            Positioned at the intersection of programming and Information
            Engineering, I am ready to make a substantial contribution to the
            ever-changing technology landscape, propelled by an insatiable
            curiosity and a dedication to continuous innovation.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
