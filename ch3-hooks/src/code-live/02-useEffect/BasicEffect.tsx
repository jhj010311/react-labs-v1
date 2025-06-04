// 컴포넌트가 마운트될 때 콘솔에 한 번만 메시지 출력
import { useEffect } from "react";

export default function BasicEffect() {
    // 초기화(설정값), 최초 데이터 api 호출 등에 응용
    useEffect(() => {
        alert("컴포넌트가 마운트됨!");
    }, []); // 빈 배열: 마운트 시 1회

    return <div>alert가 발생합니다</div>;
}
