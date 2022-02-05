import { useState } from 'react'
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [color, setColor] = useState('red')
  const [isButtonDisabled, setButtonAbility] = useState(false);

  const newButtonColor = color === 'red' ? 'blue': 'red';


  return (
    <div className="App">
      <button 
      disabled={isButtonDisabled} 
      onClick={() => setColor(newButtonColor)} 
      style={{backgroundColor: isButtonDisabled ? 'gray' : color}}>
        Change To {newButtonColor}
      </button>
      <label for="enablecheck">Disable Button</label>
      <input id="enablecheck" onClick={() => setButtonAbility((prevState) => {return !prevState})} type="checkbox">

      </input>
    </div>
  );
}

export default App;
