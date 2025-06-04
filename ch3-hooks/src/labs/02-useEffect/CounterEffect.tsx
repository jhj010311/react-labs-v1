import { useEffect, useState } from "react";

export default function CounterEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("count :>> ", count);
    }, [count]);

    return (
        <div>
            <p>count is {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
        </div>
    );
}
