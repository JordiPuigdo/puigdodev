import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const SocialLogoSection = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/JordiPuigdo",
      name: "GitHub",
      color: "bg-gray-900 hover:bg-gray-800 text-white",
      iconColor: "text-white",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/jordi-puigdollers/",
      name: "LinkedIn",
      color: "bg-[#0077B5] hover:bg-[#006097] text-white",
      iconColor: "text-white",
    },
    {
      icon: <FaYoutube />,
      url: "https://youtube.com/tucanal",
      name: "YouTube",
      color: "bg-[#FF0000] hover:bg-[#CC0000] text-white",
      iconColor: "text-white",
    },
    {
      icon: <FaX />,
      url: "https://twitter.com/Jordipuigdo92",
      name: "X",
      color: "bg-black hover:bg-[#101010]",
      iconColor: "text-white",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/jordipuigdo92",
      name: "Instagram",
      color:
        "bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] hover:opacity-90 text-white",
      iconColor: "text-white",
    },
  ];

  return (
    <div className="flex justify-center space-x-4 md:space-x-5 py-2">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enlace a ${social.name}`}
          className={`
            flex items-center justify-center
            w-10 h-10 md:w-11 md:h-11
            rounded-full
            transition-all duration-300
            shadow-md hover:shadow-lg
            transform hover:-translate-y-1
            ${social.color}
          `}
        >
          <span className={`text-lg ${social.iconColor}`}>{social.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLogoSection;
