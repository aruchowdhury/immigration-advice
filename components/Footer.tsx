import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Image from "next/image";

async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer className="w-full">
      <div className="max-w-screen-xl mx-auto md:py-8 px-4 lg:px-0">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col justify-start items-start">
            <Link href="/" className="self-start mb-4 sm:mb-0">
              <Image
                src={settings.data.site_logo.url}
                alt={settings.data.site_logo.alt || ""}
                width={200}
                height={100}
              />
            </Link>
            <div className="whitespace-nowrap text-sm font-medium flex flex-col justify-start gap-1">
              <Link
                href={`mailto:${settings.data.contact_email}`}
                target="_blank"
                className="text-slate-600 hover:text-red-400"
              >
                {settings.data.contact_email}
              </Link>
              <Link
                href={`tel:${settings.data.contact_phone_no}`}
                target="_blank"
                className="text-slate-600 hover:text-red-400"
              >
                {settings.data.contact_phone_no}
              </Link>
              <Link
                href={`https://www.google.com/search?q=${encodeURIComponent(settings.data.contact_address)}`}
                target="_blank"
                className="text-slate-600 hover:text-red-400"
              >
                {settings.data.contact_address}
              </Link>
              <div className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                {settings.data.social_links.map((item) => (
                  <PrismicNextLink
                    field={item.link}
                    key={item.label}
                    className="me-4 md:me-4 flex gap-2 align-bottom text-slate-600 hover:opacity-50 w-8 h-8"
                  >
                    <Image
                      src={item.image.url}
                      alt={item.image.alt || ""}
                      width={200}
                      height={200}
                      className="w-full rounded-md object-cover shadow-lg"
                    />
                  </PrismicNextLink>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-6 text-mm font-medium text-slate-600 sm:mb-0">
            {settings.data.footer_navigation.map(({ link, label }) => (
              <PrismicNextLink
                key={label}
                field={link}
                className="hover:text-red-400 me-4 md:me-6"
              >
                {label}
              </PrismicNextLink>
            ))}
          </div>
        </div>
        <hr className="my-4 border-gray-300 sm:mx-auto lg:my-6" />
        <span className="block text-sm text-slate-400 sm:text-center dark:text-gray-400">
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
