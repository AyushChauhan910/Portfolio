import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { textVariant } from "../utils/motion";

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Credentials</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Certifications.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div key={`${cert.name}-${cert.date}`} className="bg-tertiary rounded-2xl p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-white text-[18px] font-bold">{cert.name}</h3>
                <p className="mt-1 text-white-100 text-[14px]">{cert.issuer}</p>
                <p className="mt-1 text-secondary text-[13px]">{cert.date}</p>
              </div>

              {cert.credential ? (
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#915EFF] hover:underline whitespace-nowrap"
                >
                  Credential
                </a>
              ) : null}
            </div>

            {cert.details?.length ? (
              <ul className="mt-4 list-disc ml-5 space-y-2">
                {cert.details.map((d, idx) => (
                  <li
                    key={`${cert.name}-detail-${idx}`}
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

export default SectionWrapper(Certifications, "certifications");

