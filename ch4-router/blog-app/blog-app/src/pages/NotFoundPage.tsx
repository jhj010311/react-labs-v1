import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            <h2>404 - Not Found</h2>
            <p>페이지를 찾을 수 없습니다</p>
            <div>
                <Link to="/">홈으로</Link>
            </div>
        </div>
    );
}
