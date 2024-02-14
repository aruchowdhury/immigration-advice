import Bounded from "@/components/Bounded";
import { components } from "@/components/PrismicRichText";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RichTextParagraph`.
 */
export type RichTextParagraphProps =
  SliceComponentProps<Content.RichTextParagraphSlice>;

/**
 * Component for "RichTextParagraph" Slices.
 */
const RichTextParagraph = ({ slice }: RichTextParagraphProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="-my-6 "
    >
      <PrismicRichText field={slice.primary.text} components={components} />
    </Bounded>
  );
};

export default RichTextParagraph;
