import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { publications } from "../constants";
import { textVariant } from "../utils/motion";

const Publications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Research</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Publications.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6">
        {publications.map((pub) => (
          <div key={pub.title} className="bg-tertiary rounded-2xl p-6">
            <p className="text-white-100 text-[15px] leading-relaxed tracking-wider">
              {pub.title}
            </p>
            {pub.link ? (
              <p className="mt-4 text-[14px]">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#915EFF] hover:underline break-all"
                >
                  Link for the research paper: {pub.link}
                </a>
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Publications, "publications");
