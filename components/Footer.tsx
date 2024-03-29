import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicImage } from "@prismicio/react";

async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer className="w-full">
      <div className="max-w-screen-xl mx-auto md:py-8 px-4 lg:px-0">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col justify-start items-start">
            <PrismicNextLink
              field={settings.data.site_logo_link}
              className="mb-3 self-start w-40"
            >
              <PrismicImage field={settings.data.site_logo} />
            </PrismicNextLink>
            <div className="whitespace-nowrap text-sm font-medium flex flex-col justify-start gap-1">
              {settings.data.contact_email && (
                <PrismicNextLink
                  href={`mailto:${settings.data.contact_email}`}
                  target="_blank"
                  className="text-slate-600 hover:text-red-400"
                >
                  {settings.data.contact_email}
                </PrismicNextLink>
              )}
              {settings.data.contact_phone_no && (
                <PrismicNextLink
                  href={`tel:${settings.data.contact_phone_no}`}
                  target="_blank"
                  className="text-slate-600 hover:text-red-400"
                >
                  {settings.data.contact_phone_no}
                </PrismicNextLink>
              )}
              {settings.data.contact_address && (
                <PrismicNextLink
                  href={`https://www.google.com/search?q=${encodeURIComponent(settings.data.contact_address)}`}
                  target="_blank"
                  className="text-slate-600 hover:text-red-400"
                >
                  {settings.data.contact_address}
                </PrismicNextLink>
              )}
              <div className="flex flex-wrap items-center my-3 text-sm font-medium sm:mb-0">
                {settings.data.social_links.map((item) => (
                  <PrismicNextLink
                    field={item.link}
                    key={item.label}
                    className="me-4 md:me-4 flex gap-2 align-bottom hover:opacity-50 w-8 h-8"
                  >
                    <PrismicImage
                      field={item.image}
                      className="w-full rounded-md object-cover shadow-md"
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
                className="hover:text-red-400 me-4 md:me-6 text-sm"
              >
                {label}
              </PrismicNextLink>
            ))}
          </div>
        </div>
        <hr className="my-4 border-gray-300 sm:mx-auto lg:my-6" />
        <span className="block text-sm text-slate-400 sm:text-center dark:text-gray-400">
          ©{new Date().getFullYear()}
          <PrismicNextLink
            field={settings.data.site_logo_link}
            className="hover:underline"
          >
            .{settings.data.site_title}™
          </PrismicNextLink>
          .All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
