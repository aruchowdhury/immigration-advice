import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl mb-6">
                  {children}
                </h2>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.text}
            components={{
              paragraph: ({ children }) => <p className="mb-4">{children}</p>,
            }}
          />
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          {slice.items.map((item) => (
            <div key={item.service_name} className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-red-300 via-grey-500 to-slate-400" />
              </div>
              <div
                className="relative overflow-hidden bg-white shadow-md rounded-xl h-full bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${item.service_image.url})` }}
              >
                <div className="p-9">
                  <div className="w-12 h-12 mx-auto sm:mx-0">
                    <PrismicNextImage field={item.service_icon} />
                  </div>

                  <PrismicRichText
                    field={item.service_name}
                    components={{
                      heading3: ({ children }) => (
                        <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                          {children}
                        </h3>
                      ),
                    }}
                  />
                  <PrismicRichText
                    field={item.service_description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="mt-6 text-base text-gray-600">
                          {children}
                        </p>
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Services;
