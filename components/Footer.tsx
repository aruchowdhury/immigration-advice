import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";

async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer className="w-full">
      <div className="max-w-screen-xl mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col justify-start items-start">
            <Link href="/" className="z-10 self-start mb-4 sm:mb-0">
              <Image
                src={settings.data.site_logo.url}
                alt={settings.data.site_logo.alt || ""}
                width={150}
                height={100}
              />
            </Link>
            <div className="whitespace-nowrap text-sm font-medium text-gray-500 flex flex-col justify-start gap-1">
              <span>{settings.data.site_title}</span>
              <span>{settings.data.site_title}</span>
              <span>{settings.data.site_title}</span>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                {settings.data.footer_navigation.map(({ link, label }) => (
                  <li key={label}>
                    <PrismicNextLink
                      field={link}
                      className="me-4 md:me-6 flex gap-2 align-bottom"
                    >
                      <Image
                        src={settings.data.site_logo.url}
                        alt={settings.data.site_logo.alt || ""}
                        width={150}
                        height={100}
                      />
                      <span className="self-center">{label}</span>
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            {settings.data.footer_navigation.map(({ link, label }) => (
              <li key={label}>
                <PrismicNextLink
                  field={link}
                  className="hover:underline me-4 md:me-6"
                >
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©{new Date().getFullYear()}
          <Link href="/" className="hover:underline">
            .{settings.data.site_title}™
          </Link>
          .All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
