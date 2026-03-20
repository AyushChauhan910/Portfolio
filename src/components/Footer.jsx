import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { personal } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href={personal.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href={personal.links.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href={personal.links.leetcode}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode size={24} />
      </a>
    </footer>
  );
};

export default Footer;