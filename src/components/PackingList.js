import { useState } from "react";
import PackingListItem from "./PackingListItem";

export default function PackingList({
  items,
  onDeleteItem,
  onHandleCheckItem,
  onHandleDeleteAllItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <PackingListItem
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onHandleCheckItem={onHandleCheckItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onHandleDeleteAllItems}>Clear list</button>
      </div>
    </div>
  );
}