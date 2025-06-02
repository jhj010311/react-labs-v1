// interface User {
//     name: string;
// }

// type User = { name: string };

// export default function Greeting(user: User) {
//     // return <p> 안녕하세요, 홍길동!</p>;
//     return <p>안녕하세요, {user.name}님!</p>;
// }

// props
// 부모 컴포넌트에서 자식 컴포넌트로 넘길 때
// 매개변수는 반드시 객체 형식으로 넘어오기 때문에
// 자식 컴포넌트에서도 받는 데이터 형식을 객체 형식으로 지정해야 한다

//
//
// 구조분해할당 방식

type User = { name: string; age?: number };
import styles from "./Greeting.module.css";

export default function Greeting({ name, age }: User) {
    // return <p> 안녕하세요, 홍길동!</p>;

    // if (age) {
    //     return (
    //         <p>
    //             안녕하세요, {name}({age})님!
    //         </p>
    //     );
    // } else {
    //     return <p>안녕하세요, {name}님!</p>;
    // }

    // 조건부 렌더링 - && 연산자
    // true && true -> true를 이용한 트릭
    // 앞의 조건이 true 면 뒤의 의도된 내용을 실행
    if (age) {
        return (
            <p className={styles.hello}>
                안녕하세요, {name}
                {age !== undefined && `(${age})`}님!
            </p>
        );
    } else {
        return <p>안녕하세요, {name}님!</p>;
    }
}

// <Greeting name="길동" age={40} />
// 컴포넌트를 불러올 때 단순 숫자는 표현식으로 해줘야 한다
// 표현식이 아닐 경우 무조건 문자열로 판단

// 태그에 클래스를 적용하고 싶다면 className으로 설정

// import styles from "./Greeting.module.css";
// <p className={styles.hello}>
