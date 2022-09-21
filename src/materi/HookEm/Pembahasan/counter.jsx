const { useState } = require("react")

export const Counter = ()=>{
    let [count, setCount] = useState(0);

    let handleMinus=()=>{
        setCount(count = count - 1)
    }
    let handlePlus=()=>{
        setCount(count = count + 1)
    }

    return(
        <div>
            <button onClick={handleMinus}> - </button>
            {' '} <span>{count}</span> {' '}
            <button onClick={handlePlus}> + </button>
        </div>
    )
}