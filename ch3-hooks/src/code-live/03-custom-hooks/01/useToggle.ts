import { useState } from "react";

type ToggleReturn = [boolean, () => void];

export function useToggle(initial = false): ToggleReturn {
    const [value, setValue] = useState(initial);
    const toggle = () => setValue((v) => !v);
    return [value, toggle] as const;
}
