// los reducers son las formas en que se pueden actualizar el estado de la aplicación
import {createSlice} from '@reduxjs/toolkit';
// import taskReducer from '../features/tasks/taskSlice';
// un slice es una parte del estado de la aplicación
// en este caso el estado de la calculadora
// el estado de la calculadora es un número


export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        operating: 0,
        operator: '',
    },
    reducers: {
        setOperating: (state, action) => {
            if (state === 0) state.operating = Number(action.payload)
            state.operating = Number(`${state.operating}${action.payload}`)
        },
        setOperator: (state, action) => {
            state.operator = action.payload
        },
        addNumbers: (state, action) => {
            state.operating = state.operating + action.payload
        },
        substractNumbers: (state, action) => {
            state.operating = state.operating - action.payload
        },
        divideNumbers: (state, action) => {
            state.operating =  state.operating / action.payload
        },
        multiplyNumbers: (state, action) => {
            state.operating = state.operating * action.payload
        },
        del: (state, action) => {
            if ((action.payload).length === 1) return state.operating = 0
            state.operating =  Number(`${state.operating}`.slice(0, -1))
        },
        reset: (state, action) => {
            state.operating = 0
            state.operator = ''
        }
    }
})

export const { 
    setOperating,
    setOperator,
    addNumbers, 
    substractNumbers, 
    divideNumbers, 
    multiplyNumbers,
    del,
    reset
} = calculatorSlice.actions

export default calculatorSlice.reducer