import { JSXMapSerializer } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">{children}</h3>
  ),
  heading4: ({ children }) => (
    <h4 className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">{children}</h4>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md">
      {children}
    </p>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicNextLink>
  ),
};
