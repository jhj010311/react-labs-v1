// JSX : 자바스크립트 + HTML

export default function Expression() {
    // 자바스크립트 코드 작성 가능

    const userName = "윤유저";
    const greet = () => "안녕하세요!";

    return (
        <>
            {/* {Expression}  표현식을 중괄호로 묶어 출력 */}
            <h2>{userName}</h2>
            <h3>2 + 3 = {2 + 3}</h3>

            {/* <h3>{if (true) console.log(1)}</h3>  >> 값으로 표현되지 않으니 에러 발생*/}

            <h3>{greet()}</h3>
            {/* greet()은 값으로 표현되니 가능 */}
        </>
    );
}
