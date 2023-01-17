import "./App.css"
import { useState } from "react"

function App() {
  const [num1, updateNum1] = useState('0')
  const [num2, updateNum2] = useState('0')
  const [operator, updateOperator] = useState('+')
  const [total, updateTotal] = useState(0)
  const [storedValue, updateStore] = useState(0)

  function firstNumber(event) {
    const inputNumber = event.target.innerText
    if (num1 === '0') {
      updateNum1(inputNumber)
      return
    }else {
      updateNum1(num1 + inputNumber)
    }
  }

  function secondNumber(event) {
    const inputNumber = event.target.innerText
    if(num2 === '0'){
      updateNum2(inputNumber)
    }else{
      updateNum2(num2 + inputNumber)
    }
  }

  function handleOperator(event) {
    updateOperator(event.target.innerText)
  }

  function clearNum1() {
    updateNum1('0')
  }
  function clearNum2() {
    updateNum2('0')
  }

  function calculate() {
    if (operator === '+') {
      updateTotal(Number(num1) + Number(num2))
      clearNum1()
      clearNum2()
      return
    }
    if (operator === '-') {
      updateTotal(Number(num1) - Number(num2))
      clearNum1()
      clearNum2()
      return
    }
    if (operator === '*') {
      updateTotal(Number(num1) * Number(num2))
      clearNum1()
      clearNum2()
      return
    }
    if (operator === '÷') {
      updateTotal(Number(num1) / Number(num2))
      clearNum1()
      clearNum2()
      return
    }
  }

  function handleStore (){
    updateStore(total)
    console.log(storedValue)
  }
  function handleRecall1 (){
    updateNum1(storedValue.toString())
  }
  function handleRecall2(){
    updateNum2(storedValue.toString())
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          <button onClick={firstNumber}>1</button>
          <button onClick={firstNumber}>2</button>
          <button onClick={firstNumber}>3</button>
          <button onClick={firstNumber}>4</button>
          <button onClick={firstNumber}>5</button>
          <button onClick={firstNumber}>6</button>
          <button onClick={firstNumber}>7</button>
          <button onClick={firstNumber}>8</button>
          <button onClick={firstNumber}>9</button>
          <button onClick={firstNumber}>0</button>
          <button onClick={clearNum1}>Clear</button>
          <button onClick={handleRecall1}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={handleOperator}>+</button>
          <button onClick={handleOperator}>-</button>
          <button onClick={handleOperator}>*</button>
          <button onClick={handleOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{num2}</p>
        <div className="numbers">
          <button onClick={secondNumber}>1</button>
          <button onClick={secondNumber}>3</button>
          <button onClick={secondNumber}>2</button>
          <button onClick={secondNumber}>4</button>
          <button onClick={secondNumber}>5</button>
          <button onClick={secondNumber}>6</button>
          <button onClick={secondNumber}>7</button>
          <button onClick={secondNumber}>8</button>
          <button onClick={secondNumber}>9</button>
          <button onClick={secondNumber}>0</button>
          <button onClick={clearNum2}>Clear</button>
          <button onClick={handleRecall2}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{total}</p>
        <button onClick={handleStore}>Store</button>
        <div>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App