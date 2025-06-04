import { useRef } from "react";

export default function FocusInput() {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFocus() {
        inputRef.current?.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="입력..." />
            <button onClick={handleFocus}>포커스 주기</button>
        </div>
    );
}
