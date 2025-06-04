import { useRef, useState } from "react";

export default function LikeButton() {
    const [count, setCount] = useState(0);
    const timerId = useRef<number | null>(null);

    const handleLike = () => {
        if (timerId.current) return;

        setCount((c) => c + 1);

        timerId.current = setTimeout(() => {
            timerId.current = null;
            // clearTimeout(timerId.current);
        }, 1000);
    };

    return (
        <div>
            <p>👍 {count}</p>
            <button onClick={handleLike}>좋아요</button>
        </div>
    );
}
