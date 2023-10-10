import React from "react";
import './App.css';


function App() {
  const [hoverCount, setHoverCount] = React.useState(0)
  return (
    <div className="App">
      <button onMouseOver={() => setHoverCount(hoverCount + 1)}>Button</button>
      <p>Hover Count: {hoverCount}</p>
    </div>
  );
}

export default App;
