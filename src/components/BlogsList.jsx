import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const BlogsList = () => {
    const blogs = useSelector((state) => state.blogs);
    const navigate = useNavigate();

    const renderedBlogs = blogs.map((blog) => (
        <article className="blog-excerpt">
            <h3>{blog.title}</h3>
            <p className="blog-content">{blog.content.substring(0, 100)}</p>

            <Link to={`/blogs/${blog.id}`} className="button muted-button">
                دیدن کامل پست
            </Link>
        </article>
    ));

    return (
        <section className="blog-list">
            <button
                className="full-button accent-button"
                style={{
                    marginTop: "1em",
                }}
                onClick={() => navigate("/blogs/create-blog")}
            >
                ساخت پست جدید
            </button>
            <h2>تمامی پست ها</h2>
            {renderedBlogs}
        </section>
    );
};

export default BlogsList;
