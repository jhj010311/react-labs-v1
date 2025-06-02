type ULProps = {
    userList: {
        id: number;
        name: string;
    }[];
};

export default function UserList({ userList }: ULProps) {
    return (
        <ul>
            {userList.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
