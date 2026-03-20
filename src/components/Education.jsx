import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";
import { textVariant } from "../utils/motion";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Academic background</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((item) => (
          <div key={`${item.school}-${item.date}`} className="bg-tertiary rounded-2xl p-6">
            <h3 className="text-white text-[18px] font-bold">{item.school}</h3>
            <p className="mt-2 text-white-100 text-[15px]">{item.degree}</p>
            <p className="mt-1 text-secondary text-[13px]">{item.date}</p>

            {item.details?.length ? (
              <ul className="mt-4 list-disc ml-5 space-y-2">
                {item.details.map((d, idx) => (
                  <li
                    key={`${item.school}-detail-${idx}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");

