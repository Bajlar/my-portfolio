import React from "react";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 class="text-2xl font-bold mb-4">Connect with Me</h4>
            <div className="flex justify-center items-center gap-4">
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100006694475266"
                  target="_blank"
                >
                  <FaFacebookF className="text-3xl" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/bajlar-rahman-484503280"
                  target="_blank"
                >
                  <FaLinkedinIn className="text-3xl" />
                </a>
              </div>
              <div>
                <a href="https://dribbble.com/bajlar1007" target="_blank">
                  <FaDribbble className="text-3xl" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/bajlar_rahman_7"
                  target="_blank"
                >
                  <FaInstagram className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <hr className="border-gray-700 w-10/12" />
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-gray-300">© 2023 Bajlar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
