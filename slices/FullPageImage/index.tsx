import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FullPageImage`.
 */
export type FullPageImageProps =
  SliceComponentProps<Content.FullPageImageSlice>;

/**
 * Component for "FullPageImage" Slices.
 */
const FullPageImage = ({ slice }: FullPageImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="px-auto w-full aspect-[11/7] md:aspect-[11/4]">
        <PrismicImage
          field={slice.primary.image}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </Bounded>
  );
};

export default FullPageImage;
