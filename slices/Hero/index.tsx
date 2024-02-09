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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex relative z-20 items-center overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex relative py-16">
          <div className="sm:w-2/4 lg:w-3/6 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-4xl sm:text-6xl font-black flex flex-col leading-none text-gray-800">
              <PrismicRichText field={slice.primary.title} />
            </h1>
            <p className="text-sm sm:text-base text-gray-700">
              <PrismicRichText field={slice.primary.text} />
            </p>
            <div className="flex mt-8">
              <PrismicNextLink
                field={slice.primary.button_link_1}
                className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              >
                {slice.primary.button_text_1}
              </PrismicNextLink>
              <PrismicNextLink
                field={slice.primary.button_link_2}
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-md"
              >
                {slice.primary.button_text_2}
              </PrismicNextLink>
            </div>
          </div>
          <div className="flex sm:w-2/4 lg:w-3/6 relative">
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
      </div>
    </section>
  );
};

export default Hero;
