// 컴포넌트를 props로 받는 방법

type CardProps = {
    title: string;
    children: React.ReactNode;
};

// slot 패턴(혹은 조합형 UI 패턴)
// 틀을 만들고, 그 안에 원하는 내용을 동적으로 삽입
export default function Card({ title, children }: CardProps) {
    return (
        <div>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    );
}

{
    /* <Card title="새싹 카드" children={<h1></h1>} />
<Card title="새싹 카드">{<h1>children</h1>}</Card> */
}
