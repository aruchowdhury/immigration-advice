import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Accordion`.
 */
export type AccordionProps = SliceComponentProps<Content.AccordionSlice>;

/**
 * Component for "Accordion" Slices.
 */
const Accordion = ({ slice }: AccordionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col items-start justify-between ">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className="mr-10 text-4xl font-bold md:text-5xl">
                {children}
              </h2>
            ),
          }}
        />
        {slice.items.map((item, index) => (
          <div key={index} className="max-w-screen-lg mx-auto px-12">
            <PrismicRichText
              field={item.title}
              components={{
                heading4: ({ children }) => (
                  <h4 className="w-full py-3 font-medium text-left border-b border-gray-300">
                    {children}
                  </h4>
                ),
              }}
            />

            <div className="py-5 border-b border-gray-300">
              <PrismicRichText
                field={item.text}
                components={{
                  paragraph: ({ children }) => (
                    <p className="mb-2">{children}</p>
                  ),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Accordion;
