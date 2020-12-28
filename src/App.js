import { useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [isMatched, setIsmatched] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleInput1 = (val) => {
    setInput1(val);
    if (val !== "" && input2 !== "") {
      setIsVisible(true);
      if (input2 === val) {
        setIsmatched(true);
      } else {
        setIsmatched(false);
      }
    } else {
      setIsVisible(false);
    }
  };
  const handleInput2 = (val) => {
    setInput2(val);
    // ! error solved : putting val instead of input2
    if (input1 !== "" && val !== "") {
      setIsVisible(true);
      if (input1 === val) {
        setIsmatched(true);
      } else {
        setIsmatched(false);
      }
    } else {
      setIsVisible(false);
    }
  };
  return (
    <div className="App">
      <h1>text matcher</h1>
      <br />
      <input
        value={input1}
        type="text"
        placeholder="enter text1"
        onChange={(e) => handleInput1(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={input2}
        placeholder="enter text2"
        onChange={(e) => handleInput2(e.target.value)}
      />
      {isVisible ? (
        isMatched ? (
          <p>text is matched</p>
        ) : (
          <p style={{ color: "red" }}> text is not matched</p>
        )
      ) : null}
    </div>
  );
}

export default App;
