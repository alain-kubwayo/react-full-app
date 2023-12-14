import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const items = ["New York", "San Francisco", "Tokyo", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          Hello <span>World</span>
        </Alert>
      )}

      <Button onClick={() => setShowAlert(true)}>My Button</Button>
    </div>
  );
}

export default App;
