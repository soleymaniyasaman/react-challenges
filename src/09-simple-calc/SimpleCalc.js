import { useReducer } from "react"

const initialState = {
    firstNum: 0,
    secondNum: 0,
    result: 'no result'
}

function reducer(state, action) {
    if (action.type === 'SET_FIRST_NUM') return { ...state, firstNum: action.number }
    if (action.type === 'SET_SECOND_NUM') return { ...state, secondNum: action.number }
    if (action.type === 'ADD') return { ...state, result: state.firstNum + state.secondNum }
    if (action.type === 'SUB') return { ...state, result: state.firstNum - state.secondNum }
    if (action.type === 'CLEAR') return initialState
}


export default function SimpleCalculator() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div>
            <div>
                <h2>Number 1</h2>
                {numbers.map(number => (
                    <button key={number} onClick={() => dispatch({ type: 'SET_FIRST_NUM', number })}>
                        {number}
                    </button>))}
            </div>
            <div>
                <h2>Number 2</h2>
                {numbers.map(number => (
                    <button key={number} onClick={() => dispatch({ type: 'SET_SECOND_NUM', number })}>
                        {number}
                    </button>))}
            </div>
            <div>
                <h2>Actions</h2>
                <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
                <button onClick={() => dispatch({ type: 'SUB' })}>-</button>
                <button onClick={() => dispatch({ type: 'CLEAR' })}>c</button>
            </div>
            <div><h2>Result:{state.result}</h2></div>
        </div>
    )
}