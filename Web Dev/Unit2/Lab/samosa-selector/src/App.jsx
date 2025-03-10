import './App.css'
import samosaImage from './assets/samosa.png'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  function updateCount(){
    alert('You clicked');
    setCount(count + multiplier);
  }
  function buyDoubleStuffed(){
    if (count >= 10){
      setCount(count - 10);
      setMultiplier(multiplier * 2);
    }
  }
  function buyPartyPack(){
    if (count >= 100){
      setCount(count - 100);
      setMultiplier(multiplier * 5);
    }
  }
  function buyFullFeast(){
    if (count >= 1000){
      setCount(count - 1000);
      setMultiplier(multiplier * 10);
    }
  }
  return (
    <div className='App'>
      <h1>Sam's Samosa Selector</h1>
      <h2>Count: {count}</h2>
      <img src={samosaImage} alt="Samosa Selector" className='samosa' onClick={updateCount}/>

      <div className='container'>
        <div className='upgrade'>
          <h3>Double Stuffed 👯‍♀️	</h3>
          <p>2x per click	</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className='upgrade'>
          <h3>Party Pack 🎉	</h3>
          <p>5x per click	</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className='upgrade'>
          <h3>Full Feast 👩🏽‍🍳	</h3>
          <p>10x per click	</p>
          <button onClick={buyFullFeast}>100 samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App
