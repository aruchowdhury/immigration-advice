import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { IoPersonOutline, IoCalendarClearOutline } from "react-icons/io5";

function formatDate(inputDateStr: any) {
  const date = new Date(inputDateStr);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Props for `TitleDateAndAuthor`.
 */
export type TitleDateAndAuthorProps =
  SliceComponentProps<Content.TitleDateAndAuthorSlice>;

/**
 * Component for "TitleDateAndAuthor" Slices.
 */
const TitleDateAndAuthor = ({
  slice,
}: TitleDateAndAuthorProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col justify-between ">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading3: ({ children }) => <h3 className="">{children}</h3>,
          }}
        />

        <div className="py-2 flex">
          {slice.primary.author && (
            <div className="mr-4 flex flex-row items-center">
              <IoPersonOutline className="text-red-400 w-4 h-4" />
              <PrismicRichText
                field={slice.primary.author}
                components={{
                  paragraph: ({ children }) => (
                    <p className="ml-1">{children}</p>
                  ),
                }}
              />
            </div>
          )}
          {slice.primary.date && (
            <div className="flex flex-row items-center">
              <IoCalendarClearOutline className="text-red-400 w-4 h-4" />
              <p className="ml-1">{formatDate(slice.primary.date)}</p>
            </div>
          )}
        </div>
        <hr />
      </div>
    </Bounded>
  );
};

export default TitleDateAndAuthor;
