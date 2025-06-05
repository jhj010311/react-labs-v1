import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetailPage() {
    const { id } = useParams();
    const post = posts.find((post) => post.id === Number(id));

    if (!post) return <p>존재하지 않는 게시글입니다</p>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div>
                <Link to="/posts" className="pt-4">
                    목록으로
                </Link>
            </div>
        </div>
    );
}
