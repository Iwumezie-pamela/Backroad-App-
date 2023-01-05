import React from "react";
import { MdFacebook } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { FaSquarespace } from "react-icons/fa";


const Footer = () => {
  return (
    <section className="footer-section" id="#footer">

      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link">
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="footer-link">
            About
          </a>
        </li>

        <li>
          <a href="#services" className="footer-link">
            Services
          </a>
        </li>

        <li>
          <a href="#tours" className="footer-link">
            Tours
          </a>
        </li>
      </ul>

      <div className="footer-icons">
        <a
          href="https://web.facebook.com/?_rdc=1&_rdr"
          target="_blank"
          rel="noreferrer"
        >
          <MdFacebook className="footer-icon " />
        </a>

        <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
          <IoLogoTwitter className="footer-icon" />
        </a>
        <a
          href="https://www.google.com/search?q=squarespace"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquarespace className="footer-icon" />
        </a>
      </div>

      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="copyright"></span> 2023  all rights reserved
      </p>
    </section>
  );
};

export default Footer;
