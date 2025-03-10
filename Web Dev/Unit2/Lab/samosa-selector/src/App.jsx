import './App.css'
import samosaImage from './assets/samosa.png'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  function updateCount(){
    setCount(count + multiplier);
  }
  const [multiplier, setMultiplier] = useState(1);
  return (
    <div className='App'>
      <h1>Sam's Samosa Selector</h1>
      <h2>Count: {count}</h2>
      <img src={samosaImage} alt="Samosa Selector" className='samosa' onClick={updateCount}/>

      <div className='container'>
        <div className='upgrade'>
          <h3>Double Stuffed 👯‍♀️	</h3>
          <p>2x per click	</p>
          <button>10 samosas</button>
        </div>
        <div className='upgrade'>
          <h3>Party Pack 🎉	</h3>
          <p>5x per click	</p>
          <button>100 samosas</button>
        </div>
        <div className='upgrade'>
          <h3>Full Feast 👩🏽‍🍳	</h3>
          <p>10x per click	</p>
          <button>100 samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App
