import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";

async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer>
      <div className="mx-auto h-28">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="z-10">
              <Image
                src={settings.data.site_logo.url}
                alt={settings.data.site_logo.alt || ""}
                width={150}
                height={100}
              />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-16 sm:gap-6 sm:grid-cols-1">
            {settings.data.footer_navigation.map(({ link, label }) => (
              <div key={label}>
                <PrismicNextLink
                  field={link}
                  className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                >
                  {label}
                </PrismicNextLink>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <PrismicNextLink
                      field={link}
                      className="hover:underline"
                    ></PrismicNextLink>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <div className="mx-auto flex items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            ©2023.
            <a href="/" className="hover:underline">
              {settings.data.site_title}™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
