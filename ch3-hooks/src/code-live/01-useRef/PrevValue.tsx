import React, { useRef, useState } from "react";

export default function PrevValue() {
    const [value, setValue] = useState("");
    const prevValue = useRef("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        prevValue.current = value;
        setValue(e.target.value);
    }

    return (
        <div>
            <input value={value} type="text" onChange={handleChange} />
            <p>이전값 : {prevValue.current}</p>
        </div>
    );
}
