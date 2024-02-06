import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Image from "next/image";

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header>
      <div className="mx-auto h-28 flex justify-between items-center">
        <Link href="/" className="z-10">
          <Image
            src={settings.data.site_logo.url}
            alt={settings.data.site_logo.alt || ""}
            width={300}
            height={200}
          />
        </Link>
        <ul className="hidden md:flex">
          {settings.data.header_navigation.map(({ link, label }) => (
            <li
              key={label}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-red-700 hover:scale-105 hover:text-red-500 duration-200"
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
