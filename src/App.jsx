import { useState } from "react";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const Color = ({color, setSelectedColor}) => {
    return (
      <div
        className={color === selectedColor ? 'color selected' : color}
        onClick={() => setSelectedColor(color)}
       ></div>
    )
  }
  

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="yellow" setSelectedColor={setSelectedColor} />
        <Color color="orange" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
