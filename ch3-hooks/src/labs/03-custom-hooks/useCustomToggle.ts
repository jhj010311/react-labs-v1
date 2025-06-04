import { useState } from "react";

export function useCustomToggle(inital = false) {
    const [value, setValue] = useState(inital);

    const toggle = () => {
        setValue((v) => !v);
    };

    return [value, toggle] as const;
}
