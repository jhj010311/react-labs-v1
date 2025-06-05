import { useSearchParams } from "react-router-dom";

export default function ResultPage() {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");

    return (
        <div>
            <h2>검색결과 페이지</h2>
            <p>검색어 : {q}</p>
        </div>
    );
}
