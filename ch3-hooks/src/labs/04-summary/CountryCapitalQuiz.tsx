import { useEffect, useRef, useState } from "react";

type Country = {
    name: {
        common: string;
    };
    flags: {
        png: string;
    };
    capital: string[];
};

export default function CountryCapitalQuiz() {
    const countries = useRef<Country[] | null>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [country, setCountry] = useState<Country | null>(null);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("데이터를 불러오는 데 실패했습니다.");
                }
                return res.json();
            })
            .then((data: Country[]) => {
                countries.current = data.filter(
                    (country) => country.capital && country.capital.length !== 0
                );
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const init = useRef(false);
    const [answer, setAnswer] = useState("");

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const start = () => {
        if (!countries.current) return;
        if (!init.current) init.current = true;

        setIsCorrect(false);
        setIsSubmitted(false);
        setAnswer("");

        setCountry(
            countries.current[
                Math.floor(Math.random() * countries.current.length)
            ]
        );
    };

    const submit = () => {
        setIsCorrect(country!.capital[0] === answer.trim());
        setIsSubmitted(true);
    };

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
    }

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>에러 발생: {error}</p>;

    return (
        <>
            {!isSubmitted && country ? (
                <div>
                    <p>수도 맞히기</p>
                    <br />
                    <div>
                        <img src={country.flags.png} />
                    </div>
                    <input type="text" value={answer} onChange={handleChange} />
                    <button onClick={submit}>제출</button>
                </div>
            ) : init.current && isSubmitted && country ? (
                <div>
                    <p>수도 맞히기 결과</p>
                    <br />
                    <div>
                        <img src={country.flags.png} />
                    </div>
                    <div>
                        제출된 정답 : {answer} ⏩ {isCorrect ? "정답" : "오답"}
                        <br />
                        정답 : {country.capital[0]}
                    </div>
                    <button onClick={start}>다음 문제</button>
                </div>
            ) : (
                <div>
                    <p>수도 맞히기</p>
                    <br />
                    <div>(이곳에 문제가 제출됩니다)</div>
                    <button onClick={start}>시작</button>
                </div>
            )}
        </>
    );
}
