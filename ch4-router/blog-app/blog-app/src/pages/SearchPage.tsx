import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    function handleSearch() {
        // 검색 결과 페이지로 이동
        // 쿼리스트링(=쿼리파라미터)으로 값 넘겨주기
        navigate(`/result?q=${encodeURIComponent(input)}`);
    }

    return (
        <div>
            <h2>검색 페이지</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSearch}>검색</button>
        </div>
    );
}
