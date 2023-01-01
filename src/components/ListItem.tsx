import { type GroceryList } from "@prisma/client";
import { memo, type FC } from "react";

interface ListItemProps {
  item: GroceryList;
  onUpdate?: (item: GroceryList) => void;
}

const ListItemComponent: FC<ListItemProps> = ({ item, onUpdate }) => {
  return (
    <div className="flex items-center justify-start h-12 px-3 border-b">
      <input
        type="checkbox"
        className="w-4 h-4 mr-4 border-gray-300 rounded"
        defaultChecked={item.checked as boolean}
        onChange={() => onUpdate?.(item)}
      />
      <h2 className="text-sm tracking-wide text-gray-600">{item.title}</h2>
    </div>
  );
};

export const ListItem = memo(ListItemComponent);
