export default function Stats({ items }) {
  const numItems = items.length;
  if (numItems === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to the list! 🚀</em>
      </footer>
    );
  }
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everething! Ready to go ✈"
          : `💼 You have ${numItems} item${
              numItems === 1 ? "" : "s"
            } on your list, and
        you have already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
