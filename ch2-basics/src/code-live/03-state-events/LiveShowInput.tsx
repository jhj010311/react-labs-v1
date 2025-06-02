// input 등 사용자 입력을 받는 요소를 즉시 라이브로 반영하고 싶은 경우

import { useState } from "react";

export default function LIveShowInput() {
    const [text, setText] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }

    return (
        <div>
            <input onChange={handleChange} placeholder="입력..." />
            <p>입력값 : {text}</p>
        </div>
    );
}
