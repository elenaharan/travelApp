export default function PackingListItem({
  item,
  onDeleteItem,
  onHandleCheckItem,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onHandleCheckItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
