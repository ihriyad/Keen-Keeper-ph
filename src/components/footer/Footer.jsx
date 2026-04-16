import React from "react";
import logoXL from "./../../assets/logo-xl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#244d3fFF] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col items-center text-center gap-6">
        <img src={logoXL} alt="" className="w-48" />

        <p className="text-white/80 max-w-xl">
          Keep your connections organized and meaningful with a system built for
          clarity.
        </p>

        <div className="flex justify-center gap-6 text-xl">
          <FontAwesomeIcon
            icon={faInstagram}
            className="hover:scale-110 transition cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="hover:scale-110 transition cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="hover:scale-110 transition cursor-pointer"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 text-sm text-white/70">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>

        <p className="text-xs text-white/60">
          © 2026 KeenKeeper. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
