import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp className={clsx("w-full relative", className)} {...restProps}>
      <div className="max-w-screen-xl px-2 md:px-4 lg:px-0 mx-auto flex">
        {children}
      </div>
    </Comp>
  );
}

export default Bounded;
