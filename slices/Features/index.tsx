import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-wrap gap-12">
        <div className="mx-auto flex flex-col align-center py-6 max-w-xl text-center xl:max-w-2xl">
          <PrismicRichText
            field={slice.primary.feature_block_tag}
            components={{
              paragraph: ({ children }) => (
                <h3 className="font-heading mb-2 text-center bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widestuppercase title-font">
                  {children}
                </h3>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.feature_block_title}
            components={{
              heading2: ({ children }) => (
                <h2 className="mt-4 text-center">{children}</h2>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.feature_block_text}
            components={{
              paragraph: ({ children }) => (
                <p className="mt-4 text-center">{children}</p>
              ),
            }}
          />
        </div>
        <div className="flex flex-wrap gap-8">
          {slice.items?.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden flex flex-col lg:flex-row align-middle gap-8 justify-between ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div className="lg:py-16 lg:w-5/12">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl ">
                  <PrismicNextImage
                    field={item.feature_icon}
                    className="h-full w-full"
                  />
                </span>
                <div className="mt-6">
                  <PrismicRichText
                    field={item.feature_title}
                    components={{
                      heading3: ({ children }) => (
                        <h3 className="">{children}</h3>
                      ),
                    }}
                  />
                  <PrismicRichText
                    field={item.feature_text}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="mt-4">{children}</p>
                      ),
                    }}
                  />
                  <div className="flex mt-6">
                    <PrismicNextLink
                      field={item.feature_btn_link}
                      className="btn-gradient"
                    >
                      {item.feature_btn_text}
                    </PrismicNextLink>
                  </div>
                </div>
              </div>
              <div className="lg:relative lg:m-0 lg:h-full lg:w-5/12 lg:px-0 aspect-[11/7]">
                <PrismicNextImage
                  field={item.feature_image}
                  dir={`${index % 2 === 0 ? "ltr" : "rtl"}`}
                  className="w-full h-full lg:rounded-s-2xl rounded-lg lg:rounded-none object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Features;
