import { type FC } from "react";

interface CardContentProps {
  children: React.ReactNode;
}

export const CardContent: FC<CardContentProps> = ({ children }) => {
  return (
    <div className="w-5/6 bg-white rounded-lg drop-shadow-md md:w-4/6 lg:w-3/6 xl:w-2/6">
      {children}
    </div>
  );
};
