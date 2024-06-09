import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaMicroblog } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/hieu-nguyen-b7b1a622/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/hieu-van-nguyen" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.dailycodingpractices.com/" target="_blank">
        <FaMicroblog />
      </a>
    </div>
  );
};

export default HeaderSocials;
