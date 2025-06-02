// props에 따라 글자의 색상을 다르게 하고 싶을 때

type UserProps = {
    name: string;
    color?: string;
};

export default function ColorHello({ name, color }: UserProps) {
    return <p style={{ color }}>Hello, {name}</p>;
    // 2중 괄호로 하면 동적으로 스타일링 가능
}
