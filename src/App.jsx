import { useState } from 'react'
import './reset.scss'
import './App.scss'


function App() {
  const [count, setCount] = useState('-')

  const handleClick = () =>{
    const inputValue = document.getElementById('input').value;
    const num = parseInt(inputValue);
    const mnoz = takeMnoz(num);
    const out = document.getElementById('output');
    const result = mnoz.join(' * ');
    console.log(result)
    out.innerText = result
  }
  const takeMnoz = (value) =>{
    const mnoz = [];
    let i = 2;
    if (value === 0){
      value += 1
    }
    if (value < 1){
      value = value * -1
    }
    if (value === 1){
      mnoz.push(1)
    }
    while(value !== 1){
      if(value % i === 0){
        mnoz.push(i);
        value = value / i;
      } 
      else{
        i += 1
      }
    }
    return mnoz;
  }
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <h1>Узнать множители числа</h1>
          <p>Введите число:</p>
          <input type="number" id='input'/>
          <button type="submit" id='submit' onClick={handleClick}>Отправить</button>
          <p>Итог</p>
          <div className="output" id='output'>-</div>
        </div>
      </div>
    </>

  )
  
}

export default App
