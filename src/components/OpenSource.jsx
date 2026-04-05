import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { openSourceContributions } from "../constants";
import { textVariant } from "../utils/motion";

const OpenSource = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Open source</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Contributions.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6">
        {openSourceContributions.map((item) => (
          <div key={item.project} className="bg-tertiary rounded-2xl p-6">
            <h3 className="text-white text-[18px] font-bold">{item.role}</h3>
            <p className="mt-1 text-white-100 text-[14px]">{item.project}</p>
            <p className="mt-1 text-secondary text-[13px]">{item.meta}</p>

            <ul className="mt-4 list-disc ml-5 space-y-2">
              {item.points.map((p, idx) => (
                <li
                  key={`oss-point-${idx}`}
                  className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                  {p}
                </li>
              ))}
            </ul>

            {item.prLink ? (
              <p className="mt-4 text-[14px]">
                <a
                  href={item.prLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#915EFF] hover:underline break-all"
                >
                  PR in review: {item.prLink}
                </a>
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(OpenSource, "opensource");
