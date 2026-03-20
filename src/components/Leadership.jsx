import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { leadership } from "../constants";
import { textVariant } from "../utils/motion";

const Leadership = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Leadership & impact</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Leadership.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leadership.map((item) => (
          <div key={`${item.title}-${item.org}`} className="bg-tertiary rounded-2xl p-6">
            <h3 className="text-white text-[18px] font-bold">{item.title}</h3>
            <p className="mt-1 text-white-100 text-[14px]">{item.org}</p>
            <p className="mt-1 text-secondary text-[13px]">{item.date}</p>

            <ul className="mt-4 list-disc ml-5 space-y-2">
              {item.points.map((p, idx) => (
                <li
                  key={`${item.title}-point-${idx}`}
                  className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Leadership, "leadership");

