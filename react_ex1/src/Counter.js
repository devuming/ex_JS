import React, {useState} from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({InitialValue}) => {
    const [count, setCount] = useState(InitialValue);
    
    const onIncrease = () =>{
        setCount(count + 1);    // 1증가
    };
    const onDecrease = () =>{
        setCount(count - 1);    // 1감소
    };
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count}/>
        </div>
    );
};

Counter.defaultProps = {
    InitialValue:0,
}
export default Counter; 