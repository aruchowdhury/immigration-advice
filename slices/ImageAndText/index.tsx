import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Components for `ImageAndText`.
 */
const textComponent = (slice: any) => (
  <div className="relative flex flex-col justify-center items-center h-full">
    <PrismicRichText
      field={slice.primary.title}
      components={{
        heading2: ({ children }) => (
          <h2
            className="mb-4 text-center"
            style={{ color: `${slice.primary.text_color}` }}
          >
            {children}
          </h2>
        ),
      }}
    />
    <PrismicRichText
      field={slice.primary.text}
      components={{
        paragraph: ({ children }) => (
          <p
            className="mb-6 text-center"
            style={{ color: `${slice.primary.text_color}` }}
          >
            {children}
          </p>
        ),
      }}
    />
    {slice.primary.link && slice.primary.link_text ? (
      <PrismicNextLink field={slice.primary.link} className="btn-gradient">
        {slice.primary.link_text}
      </PrismicNextLink>
    ) : (
      ""
    )}
  </div>
);

const imageComponent = (slice: any) => (
  <PrismicImage
    field={slice.primary.image}
    className="object-cover object-center w-full h-full"
  />
);

/**
 * Props for `ImageAndText`.
 */
export type ImageAndTextProps = SliceComponentProps<Content.ImageAndTextSlice>;

/**
 * Component for "ImageAndText" Slices.
 */
const ImageAndText = ({ slice }: ImageAndTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" ? (
        <div className="relative overflow-hidden w-full aspect-[11/6] md:aspect-[11/4]">
          <div className="absolute inset-0">{imageComponent(slice)}</div>
          {textComponent(slice)}
        </div>
      ) : (
        <div
          className={`relative flex flex-col items-center mx-auto 
          ${slice.variation === "imageAndTextLeft" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
          <div className="w-full h-1/2 lg:aspect-square lg:w-2/5 lg:h-auto lg:mx-16">
            {imageComponent(slice)}
          </div>
          <div
            className={`bg-white md:z-10 lg:shadow-lg lg:absolute -mt-20 lg:mt-0 w-4/5 lg:w-3/5 rounded-xl
            ${slice.variation === "imageAndTextLeft" ? "lg:left-0 lg:ml-24 xl:ml-20" : "lg:right-0 lg:me-24 xl:me-20"}`}
          >
            <div className="flex flex-col p-12 md:px-16">
              {textComponent(slice)}
            </div>
          </div>
        </div>
      )}
    </Bounded>
  );
};

export default ImageAndText;
