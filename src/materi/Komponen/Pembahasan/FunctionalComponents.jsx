import { useState } from "react";

const FunctionalComponent = (props)=> { 
    const [value, setValue] = useState(0);  

    const handlePlus = () => {
        setValue(value + 1)
    }
    const handleMinus = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }


    return <div>
            <h1>HA 2 = FUNGI {props.nama}</h1>
            <button onClick={handleMinus}>-</button>
            <span> {value} </span>
            <button  onClick={handlePlus} >+</button>
            </div>
}

FunctionalComponent.defaultProps =  {
    nama : "user"
}
export default FunctionalComponent;