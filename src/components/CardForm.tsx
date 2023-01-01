import { type FC } from "react";

interface CardFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: () => void;
}

export const CardForm: FC<CardFormProps> = ({ value, onChange, submit }) => {
  return (
    <div className="w-5/6 mt-4 bg-white rounded-lg drop-shadow-md md:w-4/6 lg:w-3/6 xl:w-2/6">
      <div className="relative">
        <input
          className="w-full py-4 pl-3 pr-16 text-sm rounded-lg"
          type="text"
          placeholder="e.g. Oat Milk"
          onChange={onChange}
          value={value}
        />
        <button
          className="absolute p-2 text-white -translate-y-1/2 bg-blue-600 rounded-full top-1/2 right-4"
          type="button"
          onClick={submit}
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
