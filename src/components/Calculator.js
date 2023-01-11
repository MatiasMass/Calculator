import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Button from './Button'
import { 
  addNumbers, 
  multiplyNumbers, 
  divideNumbers, 
  substractNumbers, 
  setOperating, 
  setOperator,
  del,
  reset
} from '../features/calculator/calculatorSlice'
import './Calculator.css'

const calcMap = {
  '+': addNumbers,
  '-': substractNumbers,
  '*': multiplyNumbers,
  '/': divideNumbers,
}

function Calculator() {

  const [display, setDisplay] = useState(0)

  const {operating, operator} = useSelector(state => state.calculator)

  const dispatch = useDispatch()

  useEffect(() => {
    setDisplay(() => operating) //  buena practica pasarlo como funcion
  }, [operating])

  const handleClick = ({currentTarget}) => {
    const {value} = currentTarget
    if (value === 'del') return dispatch(del(operating))
    if (!operator) return dispatch(setOperating(value))
    const operationFunction = calcMap[operator]
    dispatch(operationFunction(Number(value)))
    dispatch(setOperator(''))
  }

  const handleReset = () => {
    dispatch(reset())
  } 

  const handleChangeOperation = ({currentTarget}) => {
    const {value} = currentTarget
    dispatch(setOperator(value))
  }
  
  return (
    <div className='calculator'>
        <div className='display'>
          {display + operator}
        </div>
          <button onClick={handleClick} value="7">7</button>
          <button onClick={handleClick} value="8">8</button>
          <button onClick={handleClick} value="9">9</button>
          <button onClick={handleClick} value="del">DEL</button>
          <button onClick={handleClick} value="">4</button>
          <button onClick={handleClick} value="5">5</button>
          <button onClick={handleClick} value="6">6</button>
          <button className='operator' onClick={handleChangeOperation} value='+'>+</button>
          <button onClick={handleClick} value="1">1</button>
          <button onClick={handleClick} value="2">2</button>
          <button onClick={handleClick} value="3">3</button>
          <button className='operator' onClick={handleChangeOperation} value='-'>-</button>
          <button onClick={handleClick} value="0">0</button>
          <button className='operator' onClick={handleChangeOperation} value='/'>/</button>          
          <button className='operator' onClick={handleChangeOperation} value='*'>x</button>
          <button className='reset' onClick={handleReset}>reset</button>
    </div>
  )
}

export default Calculator