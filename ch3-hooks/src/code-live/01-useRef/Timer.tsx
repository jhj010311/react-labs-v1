import { useRef, useState } from "react";

export default function Timer() {
    const [count, setCount] = useState(0);
    const timerId = useRef<number | null>(null); // 이 아이디는 렌더링하지 않으니 useRef를 하는 것이 좋다

    const start = () => {
        if (timerId.current) return; // 이미 타이머가 있다면 중복 생성 방지
        timerId.current = setInterval(() => {
            setCount((c) => c + 1); // setCount(count + 1) 형태로 쓰지 말라고 리액트 공식에서 권고 >> 클로저 동작 때문
        }, 1000);
    };

    const stop = () => {
        if (timerId.current) {
            clearInterval(timerId.current);
            timerId.current = null;
        }
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <p>카운트: {count}</p>
            <button onClick={start}>시작</button>
            <button onClick={stop}>멈춤</button>
            <button onClick={reset}>리셋</button>
        </div>
    );
}
