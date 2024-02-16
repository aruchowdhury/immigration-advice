import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { IoIosArrowRoundForward } from "react-icons/io";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-7xl my-2">
        <div className="max-w-2xl mx-auto text-center xl:max-w-3xl">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => <h2 className="mb-4">{children}</h2>,
            }}
          />
          <PrismicRichText
            field={slice.primary.text}
            components={{
              paragraph: ({ children }) => <p className="mb-4">{children}</p>,
            }}
          />
          <PrismicNextLink
            field={slice.primary.link}
            className="block mb-4 mt-2 text-base font-black uppercase cursor-pointer border-b border-transparent hover:text-red-500 text-red-400"
          >
            {slice.primary.link_title}
          </PrismicNextLink>
        </div>
        <div className="grid max-w-full lg:max-w-full grid-cols-1 mx-auto mt-6 gap-y-6 sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-16 text-left">
          {slice.items.map((item, index) => (
            <PrismicNextLink
              field={item.service_link}
              key={index}
              className="relative"
            >
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-red-300 via-grey-500 to-slate-400" />
              </div>
              <div
                className="relative overflow-hidden bg-white shadow-md rounded-xl h-full bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${item.service_image.url})` }}
              >
                <div className="p-9">
                  <div className="w-12 h-12">
                    <PrismicNextImage field={item.service_icon} />
                  </div>

                  <PrismicRichText
                    field={item.service_name}
                    components={{
                      heading3: ({ children }) => (
                        <h3 className="mt-6 sm:mt-10">{children}</h3>
                      ),
                    }}
                  />
                  <PrismicRichText
                    field={item.service_description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="mt-4 mb-12">{children}</p>
                      ),
                    }}
                  />
                  <PrismicNextLink
                    field={item.service_link}
                    className="absolute bottom-10 mt-4 flex flex-row text-slate-500 hover:text-red-300"
                  >
                    <span>View details</span>
                    <IoIosArrowRoundForward className="self-center" />
                  </PrismicNextLink>
                </div>
              </div>
            </PrismicNextLink>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Services;
