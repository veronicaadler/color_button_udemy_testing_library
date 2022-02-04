import { useState } from 'react'
import './App.css';

function App() {
  const [color, setColor] = useState('red')

  const newButtonColor = color === 'red' ? 'blue': 'red';


  return (
    <div className="App">
      <button onClick={() => setColor(newButtonColor)} style={{backgroundColor: color}}>
        Change To {newButtonColor}
      </button>
    </div>
  );
}

export default App;
