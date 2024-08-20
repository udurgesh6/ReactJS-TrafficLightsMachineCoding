import "./styles.css";
import { useState, useEffect } from "react";

const config = {
  green: 5000,
  yellow: 3000,
  red: 4000,
};

export default function App() {
  const [showLight, setShowLight] = useState("green");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showLight === "green") {
        setShowLight("yellow");
      }
      if (showLight === "yellow") {
        setShowLight("red");
      }
      if (showLight === "red") {
        setShowLight("green");
      }
    }, config[showLight]);

    return () => {
      clearTimeout(timer);
    };
  }, [showLight]);

  useEffect(() => {
    setCounter(1);
    const id = setInterval(() => setCounter((counter) => counter + 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, [showLight]);

  return (
    <div className="App">
      <div
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: showLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {counter}
      </div>
    </div>
  );
}
