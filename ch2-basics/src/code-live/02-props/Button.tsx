// props로 함수 넘기기

type ButtonProps = {
    label: string;

    // 함수 만들기
    onClick: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
    // react는 각종 이벤트를 제공한다
    return <button onClick={onClick}>{label}</button>;
}

// <Button label="버튼" onClick={() => alert("안녕!!")} />

// 혹은 사용하는 페이지에서 onClick 속성용 함수를 만들어서 넘기기
