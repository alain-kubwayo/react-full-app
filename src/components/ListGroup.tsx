function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "Paris"];

  return (
    <>
      <h1>List</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
