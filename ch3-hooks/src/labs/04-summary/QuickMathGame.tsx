import { useRef, useState } from "react";

export default function QuickMathGame() {
    const [count, setCount] = useState(10);
    const intervalId = useRef<number | null>(null);
    const timeoutId = useRef<number | null>(null);

    const left = useRef(0);
    const right = useRef(0);

    const init = useRef(false);
    const [answer, setAnswer] = useState("");

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const start = () => {
        if (intervalId.current) clearInterval(intervalId.current);
        if (timeoutId.current) clearTimeout(timeoutId.current);
        if (!init.current) init.current = true;

        if (intervalId.current) return;

        setIsCorrect(false);
        setIsSubmitted(false);
        setAnswer("");
        setCount(10);

        intervalId.current = window.setInterval(() => {
            setCount((c) => c - 1);
        }, 1000);

        timeoutId.current = window.setTimeout(submit, 10000);

        left.current = Math.floor(Math.random() * 90 + 10);
        right.current = Math.floor(Math.random() * 90 + 10);
    };

    const submit = () => {
        if (!intervalId.current) return;

        clearInterval(intervalId.current);
        clearInterval(timeoutId.current!);
        intervalId.current = null;
        timeoutId.current = null;

        setIsCorrect(left.current * right.current === Number(answer.trim()));
        setIsSubmitted(true);
    };

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
    }

    return (
        <>
            {intervalId.current ? (
                <div>
                    <p>제한시간 : {count}초</p>
                    <br />
                    <p>
                        {left.current} x {right.current} = ?
                    </p>
                    <input type="text" value={answer} onChange={handleChange} />
                    <button onClick={submit}>제출</button>
                </div>
            ) : init.current && isSubmitted ? (
                <div>
                    <p>10초 암산 승부 결과</p>
                    <br />
                    <p>
                        {left.current} x {right.current} =
                        {left.current * right.current}
                    </p>
                    <p>
                        제출된 정답 : {answer} ⏩ {isCorrect ? "정답" : "오답"}
                    </p>
                    <button onClick={start}>다시 시작</button>
                </div>
            ) : (
                <div>
                    <p>10초 암산 승부</p>
                    <br />
                    <p>(이곳에 문제가 제출됩니다)</p>
                    <button onClick={start}>시작</button>
                </div>
            )}
        </>
    );
}
