import { useToggle } from "./useToggle";

export default function ToggleSwitch() {
    const [on, toggle] = useToggle();
    // 기존 setOn 같이 하던 것과는 달라짐
    // 모듈화했으므로 재사용성 높음, 그러면서 각자 독립적으로 움직이게 할 수 있음

    const [on2, toggle2] = useToggle();

    return (
        <>
            <button onClick={toggle}>{on ? "켜짐" : "꺼짐"}</button>
            <button onClick={toggle2}>{on2 ? "켜짐" : "꺼짐"}</button>
        </>
    );
}
