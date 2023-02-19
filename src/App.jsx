import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [hexaArray, setHexaArray] = useState([]);
  const [pickHexColor, setpickHexColor] = useState("");
  const [message, setMessage] = useState("Pick Color Code 😋");

  const hexColorCodeGenerator = () => {
    // let n = (Math.random() * 0xfffff * 1000000).toString(16);
    // let hexVal = "#" + n.slice(0, 6);
    const colorCodes = new Array(3)
      .fill("")
      .map(
        () => "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)
      );
    setHexaArray(colorCodes);
    setpickHexColor([Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    hexColorCodeGenerator();
  }, []);

  const checkPickedColor = (color) => {
    color === hexaArray[pickHexColor]
      ? setMessage("Win 🤸")
      : setMessage("Loss 😥");
    hexColorCodeGenerator();
  };

  return (
    <div className="App">
      <div
        className="color-box"
        style={{ backgroundColor: hexaArray[pickHexColor] }}
      ></div>
      <div className="buttns">
        {hexaArray.map((color) => (
          <button
            key={color}
            style={{ margin: "5px", cursor: "pointer" }}
            onClick={() => checkPickedColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <div style={{ border: "gray solid 1px" }}>
        <h2>{message} </h2>
      </div>
    </div>
  );
}

export default App;
