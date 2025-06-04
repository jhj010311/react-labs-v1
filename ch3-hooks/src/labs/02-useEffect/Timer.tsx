import { useEffect, useState } from "react";

export default function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((c) => c + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Clean Up!");
        };
    }, []);

    return <div>count : {count}</div>;
}
