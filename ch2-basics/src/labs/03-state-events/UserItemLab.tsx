type User = {
    id: number;
    name: string;
};

type UserProps = {
    user: User;
    onDelete: (id: number) => void;
};

export default function UserItemLab({ user, onDelete }: UserProps) {
    return (
        <li key={user.id}>
            {user.name}
            {<button onClick={() => onDelete}>삭제</button>}
        </li>
    );
}
