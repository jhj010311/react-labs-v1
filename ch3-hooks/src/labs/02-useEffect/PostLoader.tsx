import { useEffect, useState } from "react";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export default function PostLoader() {
    const [post, setPost] = useState<Post | null>();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => res.json())
            .then((data) => setPost(data))
            .catch(() => console.log("에러 발생"));
    }, []);

    return (
        <div>
            {post ? (
                <>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </>
            ) : (
                <p>로딩중...</p>
            )}
        </div>
    );
}
