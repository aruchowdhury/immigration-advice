import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto pt-6 md:w-9/12 lg:w-8/12 relative flex flex-col align-middle bg-gradient-to-r from-red-100 to-orange-50 rounded-xl">
        <PrismicNextImage
          field={slice.primary.cta_image}
          className="h-24 w-24 rounded-full object-cover self-center"
        />

        <div className="my-6 m-auto space-y-6">
          <PrismicRichText
            field={slice.primary.cta_ttile}
            components={{
              heading3: ({ children }) => (
                <h3 className="text-center">{children}</h3>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.cta_text}
            components={{
              paragraph: ({ children }) => (
                <p className="text-center">{children}</p>
              ),
            }}
          />
          <div className="flex flex-wrap justify-center gap-6">
            <PrismicNextLink
              field={slice.primary.cta_btn_link_1}
              className="btn-primary mr-4 "
            >
              {slice.primary.cta_btn_title_1}
            </PrismicNextLink>
            <PrismicNextLink
              field={slice.primary.cta_btn_link_2}
              className="btn-secondary py-2 px-4"
            >
              {slice.primary.cta_btn_title_2}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default CallToAction;
