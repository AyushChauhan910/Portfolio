import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { skillGroups, technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",  
      {
        opacity: 0,
        y: 80
      },
      {



        
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  return (
    <section>
      <div>
        <p className={styles.sectionSubText}>Tooling</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div key={group.title} className="bg-tertiary rounded-2xl p-6">
            <h3 className="text-white text-[18px] font-bold">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={`${group.title}-${item}`}
                  className="text-[13px] text-white-100 bg-black-200/60 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tech-icons-wrapper mt-12 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-20 h-20" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className="tech-icon w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
