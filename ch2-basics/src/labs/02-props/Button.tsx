type ButtonProps = {
    title: string;
    onClick: () => void;
};

export default function Button({ title, onClick }: ButtonProps) {
    return (
        <button title={title} onClick={onClick}>
            버튼
        </button>
    );
}
