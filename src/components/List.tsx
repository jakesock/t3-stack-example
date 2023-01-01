import { type FC } from "react";

interface ListProps {
  children: React.ReactNode;
}

export const List: FC<ListProps> = ({ children }) => {
  return <div className="overflow-y-auto h-72">{children}</div>;
};
