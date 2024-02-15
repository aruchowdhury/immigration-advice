import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { PrismicImage } from "@prismicio/react";

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="w-full">
      <div className="max-w-screen-xl px-4 lg:px-0 mx-auto h-28 flex justify-between items-center">
        <Link href="/" className="z-30 w-72 flex justify-start align-middle">
          <PrismicImage field={settings.data.site_logo} className="w-full" />
        </Link>
        <ul className="hidden md:flex">
          {settings.data.header_navigation.map(({ link, label }) => (
            <li
              key={label}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-slate-700 hover:scale-105 hover:text-red-400 duration-200"
            >
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
        <MobileNav settings={settings} />
      </div>
    </header>
  );
}

export default Header;
