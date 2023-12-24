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
    if (value === 0){
      value += 1
    }
    if (value < 1){
      value = value * -1
    }
    if (value === 1){
      mnoz.push('Некоректное число')
    }
    while (value % 2 === 0) {
      mnoz.push(2);
      value = value / 2;
    }
  
    while (value % 3 === 0) {
      mnoz.push(3);
      value = value / 3;
    }
  
    while (value % 5 === 0) {
      mnoz.push(5);
      value = value / 5;
    }
  
    while (value % 7 === 0) {
      mnoz.push(7);
      value = value / 7;
    }
    while (value > 1){
      mnoz.push(value)
      value = 0
    }
    

    return mnoz;
  }
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <h1>Узнать множетели числа</h1>
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
