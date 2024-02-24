import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { formatDate } from "@/utils/HelperFunctions";

/**
 * Props for `ArticleList`.
 */
export type ArticleListProps = SliceComponentProps<Content.ArticleListSlice>;

/**
 * Component for "ArticleList" Slices.
 */
const ArticleList = ({ slice }: ArticleListProps): JSX.Element => {
  // Keep only the first three items
  const displayedItems = slice.items?.slice(0, 3);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-7xl my-2">
        <div className="mb-12 max-w-2xl mx-auto text-center xl:max-w-3xl">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({ children }) => <h2 className="mb-4">{children}</h2>,
            }}
          />
          <PrismicRichText
            field={slice.primary.text}
            components={{
              paragraph: ({ children }) => <p className="mb-4">{children}</p>,
            }}
          />
          <PrismicNextLink
            field={slice.primary.link}
            className="block mb-4 mt-2 text-base font-black uppercase cursor-pointer border-b border-transparent hover:text-red-500 text-red-400"
          >
            View all
          </PrismicNextLink>
        </div>
        <div className="mx-auto mt-12 grid gap-5 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
          {displayedItems.map((item, index) => (
            <PrismicNextLink
              field={item.article_link}
              key={index}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <div className="h-48 w-full object-cover">
                  <PrismicNextImage field={item.article_banner_image} />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <PrismicRichText
                    field={item.title_tag}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-sm font-medium text-red-400">
                          {children}
                        </p>
                      ),
                    }}
                  />
                  <div className="mt-2 block">
                    <PrismicRichText
                      field={item.article_title}
                      components={{
                        heading3: ({ children }) => (
                          <h3 className="">{children}</h3>
                        ),
                      }}
                    />
                    <PrismicRichText
                      field={item.article_text}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="mt-4 mb-6">{children}</p>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <PrismicNextImage
                      className="h-10 w-10 rounded-full object-cover"
                      field={item.article_banner_image}
                    />
                  </div>
                  <div className="ml-3">
                    <PrismicRichText
                      field={item.author_name}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="text-sm text-slate-500">{children}</p>
                        ),
                      }}
                    />
                    <div className="flex space-x-1">
                      <p className="text-sm text-slate-500">
                        {formatDate(item.date_published)}
                      </p>
                      <span aria-hidden="true" className="text-slate-500">
                        ·
                      </span>
                      <p className="text-sm text-slate-500">
                        {item.reading_time} min read
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </PrismicNextLink>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default ArticleList;
