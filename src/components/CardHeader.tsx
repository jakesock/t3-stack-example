import { type FC } from "react";

interface CardHeaderProps {
  title: string;
  listLength: number;
  clearAllFn?: () => void;
}

export const CardHeader: FC<CardHeaderProps> = ({ title, listLength, clearAllFn }) => {
  return (
    <div className="flex flex-row items-center justify-between p-3 border-b border-slate-200">
      <div className="flex flex-row items-center justify-between">
        <h1 className="mr-2 text-base font-medium tracking-wide text-gray-900">{title}</h1>
        <span className="flex items-center justify-center w-5 h-5 text-xs text-blue-600 bg-blue-200 rounded-full">
          {listLength}
        </span>
      </div>
      <button
        className="text-sm font-medium text-gray-600 underline"
        type="button"
        onClick={clearAllFn}
      >
        Clear all
      </button>
    </div>
  );
};
