import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Room() {
  const [isLit, setLit] = React.useState(false);
  const brightness = isLit ? "lit" : "dark";
  const [temp, setTemp] = React.useState(72);
  return (
    <div className={`room ${brightness}`}>
      This room is {isLit ? "lit" : "dark"}
      <br />
      <button onClick={() => setLit(false)}>Off</button>
      <button onClick={() => setLit(true)}>On</button>
      <div>
          Temperature = {temp}<br />
          <button onClick={() => setTemp(temp+1)}>Increase Temperature</button>
          <button onClick={() => setTemp(temp-1)}>Decrease Temperature</button>
      </div>
    </div>


  );
}

ReactDOM.render(<Room />, document.querySelector("#root"));
