type User = {
    name: string;
    age: number;
};

export default function Profile({ name, age }: User) {
    return (
        <p>
            이름 : {name}, 나이 : {age}세
        </p>
    );
}
