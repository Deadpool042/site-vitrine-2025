import { ReactNode } from "react";
import clsx from "clsx";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function SectionWrapper({
  children,
  className,
  style,
  ...rest
}: SectionWrapperProps) {
  return (
    <section
      className={clsx("w-screen p-2 space-y-10 ", className)}
      style={style}
      {...rest}>
      <div className="max-w-6xl p-2 mx-auto">{children}</div>
    </section>
  );
}

export default SectionWrapper;
