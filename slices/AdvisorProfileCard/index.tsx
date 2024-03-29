import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { CiLinkedin, CiFacebook, CiYoutube } from "react-icons/ci";

/**
 * Props for `AdvisorProfileCard`.
 */
export type AdvisorProfileCardProps =
  SliceComponentProps<Content.AdvisorProfileCardSlice>;

/**
 * Component for "AdvisorProfileCard" Slices.
 */
const AdvisorProfileCard = ({
  slice,
}: AdvisorProfileCardProps): JSX.Element => {
  // Keep only the first three items
  const displayedItems = slice.items?.slice(0, 3);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col justify-between pt-10 -mb-10 w-full">
        <div className="flex flex-wrap items-center justify-between mb-12">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => <h2 className="mr-10">{children}</h2>,
            }}
          />
          <PrismicNextLink
            field={slice.primary.view_all_link}
            className="block mt-2 text-base font-black ppercase cursor-pointer border-b border-transparent text-red-400 hover:text-red-500"
          >
            View all
          </PrismicNextLink>
        </div>
        <div className="grid max-w-full lg:max-w-full grid-cols-1 mx-auto mt-6 gap-y-6 sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedItems?.map((item, index) => (
            <div key={index} className="relative my-16 mx-auto w-full">
              <div className="rounded-xl overflow-hidden shadow-md bg-white w-full h-full">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32 border-4 border-white rounded-full overflow-hidden">
                    <PrismicNextImage
                      field={item.profile_image}
                      className="h-full w-full rounded-full object-cover self-center"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16 w-full flex flex-col">
                  <PrismicRichText
                    field={item.role}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="mb-4 text-xs max-w-max font-bold capitalize border-b-2 border-red-400 self-center">
                          {children}
                        </p>
                      ),
                    }}
                  />

                  <PrismicRichText
                    field={item.name}
                    components={{
                      heading3: ({ children }) => (
                        <h3 className="text-center mb-1">{children}</h3>
                      ),
                    }}
                  />
                  <PrismicRichText
                    field={item.text}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-center pt-2 pb-6">{children}</p>
                      ),
                    }}
                  />
                  <PrismicNextLink
                    field={item.view_btn_link}
                    className="btn-primary self-center text-sm"
                  >
                    Learn more
                  </PrismicNextLink>
                  <div className="w-full flex justify-center py-6">
                    <PrismicNextLink field={item.youtube_link} className="mx-5">
                      <CiYoutube className="w-8 h-8 text-slate-600" />
                    </PrismicNextLink>
                    <PrismicNextLink
                      field={item.linkedin_link}
                      className="mx-5"
                    >
                      <CiLinkedin className="w-8 h-8 text-slate-600" />
                    </PrismicNextLink>
                    <PrismicNextLink
                      field={item.facebook_link}
                      className="mx-5"
                    >
                      <CiFacebook className="w-8 h-8 text-slate-600" />
                    </PrismicNextLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AdvisorProfileCard;
