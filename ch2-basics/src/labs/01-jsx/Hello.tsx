export default function Hello() {
    const a = 5;
    const b = 3;

    function add(x: number, y: number): number {
        return x + y;
    }

    return (
        <div>
            <h1>Hello, React!</h1>
            <ul>
                <li>a = {a}</li>
                <li>b = {b}</li>
                <li>a + b = {a + b}</li>
                <li>add(a, b) = {add(a, b)}</li>
            </ul>
        </div>
    );
}
