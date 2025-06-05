import { Navigate } from "react-router-dom";

export default function LoginPage() {
    const isLogin = true;

    if (isLogin) {
        // 로그인된 상태면 홈페이지로 리다이렉트
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <h2>로그인 페이지</h2>
        </div>
    );
}
