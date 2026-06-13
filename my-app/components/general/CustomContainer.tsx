import { ReactNode } from "react";

type CustomContainerProps = {
  customClassName?: string;
  title?: string;
  children: ReactNode;
};

export default function CustomContainer({
  customClassName,
  title,
  children,
}: CustomContainerProps) {
  return (
    <div
      className={`${customClassName} flex flex-col border border-gray-300 rounded-lg bg-white shadow p-3`}
    >
      <h3 className={"app-font-body mb-2 text-xl font-semibold"}>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
