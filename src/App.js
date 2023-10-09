import './App.css';

let hoverCount = 0;

function addHoverCount() {
  hoverCount = hoverCount + 1
  document.getElementById('display').innerHTML = hoverCount
}

function App() {
  return (
    <div className="App">
      <button id='btn' onMouseOver={addHoverCount}>Button</button>
      <p id='counter'>Hover Count: <span id='display'>0</span></p>
    </div>
  );
}

export default App;
