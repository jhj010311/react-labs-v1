import { useState } from "react";

export default function Counter() {
    // count : 상태변수, 읽기전용
    // setCount : count의 값을 바꿀 때 사용
    const [count, setCount] = useState(0);

    function upCount() {
        setCount(count + 1);
        console.log("count :>> ", count);
    }

    return (
        <div>
            <button onClick={upCount}>+1</button>
            <p>현재 카운트 : {count}</p>
        </div>
    );
}
