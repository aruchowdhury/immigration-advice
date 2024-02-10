"use client";
import React, { useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

function MobileNav({ settings }) {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <div
        onClick={() => setMobileNav(!mobileNav)}
        className="cursor-pointer z-20 text-red-700 md:hidden"
      >
        {mobileNav ? (
          <AiOutlineClose className="w-8 h-8" />
        ) : (
          <RxHamburgerMenu className="w-8 h-8" />
        )}
      </div>
      {mobileNav && (
        <ul className="card-bg flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-red-700">
          {settings.data.header_navigation.map(({ link, label }) => (
            <li
              key={label}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default MobileNav;
