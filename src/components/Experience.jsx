// Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../utils/motion"; // Make sure this exists and exports textVariant function
import { styles } from "../styles"; // Your CSS module or style object
import { SectionWrapper } from "../hoc"; // HOC for section wrapper
import { experiences, navigationPaths } from "../constants"; // Your constants file

// ExperienceCard component - represents a single timeline item
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <a
          href={experience.company_website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-full h-full"
        >
          <img
            src={experience.icon || "/placeholder-icon.png"}
            alt={experience.company_name || "Company"}
            className="w-[60%] h-[60%] object-contain"
          />
        </a>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 ml-5 list-disc space-y-2">
        {Array.isArray(experience.points) &&
          experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Main Experience section component
const Experience = () => {
  return (
    <>
      {/* Animate the header text */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      {/* Timeline container */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id || `experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Wrap Experience component with SectionWrapper HOC, passing navigation path for routing or styling
export default SectionWrapper(Experience, navigationPaths.work);
