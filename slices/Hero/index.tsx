import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto py-16 flex relative items-center overflow-hidden">
        <div className="pe-4 sm:w-2/4 lg:w-3/6 flex flex-col relative">
          <span className="w-20 h-2 bg-slate-700 mb-12"></span>
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => (
                <h1 className="flex flex-col leading-none pb-4">{children}</h1>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.text}
            components={{
              paragraph: ({ children }) => (
                <p className="text-lg md:text-xl">{children}</p>
              ),
            }}
          />
          <div className="flex mt-8">
            <PrismicNextLink
              field={slice.primary.button_link_1}
              className="btn-primary mr-4 "
            >
              {slice.primary.button_text_1}
            </PrismicNextLink>
            <PrismicNextLink
              field={slice.primary.button_link_2}
              className="btn-secondary"
            >
              {slice.primary.button_text_2}
            </PrismicNextLink>
          </div>
        </div>
        <div className="hidden md:flex sm:w-2/4 lg:w-3/6 relative">
          {!slice.primary.video_link ? (
            <div
              dangerouslySetInnerHTML={{
                __html: slice.primary.video_link.html,
              }}
            />
          ) : (
            <PrismicNextImage
              field={slice.primary.image}
              className="m-auto w-full max-w-full h-auto aspect-w-2 aspect-h-1 object-cover object-top"
            />
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
