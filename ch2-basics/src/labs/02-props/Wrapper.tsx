type Wrap = {
    children: React.ReactNode;
};

export default function Wrapper({ children }: Wrap) {
    return <div>{children}</div>;
}
