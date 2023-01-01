import { type FC } from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
      {children}
    </div>
  );
};
