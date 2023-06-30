import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { navLinksData } from "./../../../constants/index";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full sticky top-0 z-10 bg-base-100 h-20 shadow-md font-medium cursor-pointer">
        <div className="relative flex items-center justify-between py-5 mx-auto px-4 md:px-28">
          <div className="flex items-center">
            <h3 className="text-2xl font-bold hover:text-primary uppercase">
              Bajlar
            </h3>
          </div>
          <ul className="items-center hidden space-x-8 md:flex">
            {navLinksData.map(({ _id, title, link }) => (
              <li key={_id} className="">
                <a href={`#${link}`}>{title}</a>
              </li>
            ))}
          </ul>
          {/* Mobile Navbar */}
          <div className="md:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <HiMenuAlt3 className="h-6 w-6 text-black hover:text-black focus:text-black" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-4 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    {/* Logo & Button section */}
                    <div>
                      <h3 className="text-2xl font-bold uppercase">Bajlar</h3>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <HiOutlineX className="h-6 w-6 text-black hover:text-black focus:text-black" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      {navLinksData.map(({ _id, title, link }) => (
                        <li
                          onClick={() => setIsMenuOpen(false)}
                          className=""
                          key={_id}
                        >
                          <a href={`#${link}`}>{title}</a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
