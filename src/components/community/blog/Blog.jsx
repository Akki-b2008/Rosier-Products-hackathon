import { Link } from "react-router-dom";
import "./Blog.css";
import blogPosts from './BlogData'

export default function BlogPage() {
  return (
    <main className="blog-page">
      <section className="blog-hero fade-in">
        <h1>Our Thoughts & Traditions</h1>
        <p>Explore the world of purity, wellness, and ancient food wisdom.</p>
      </section>

      <section className="blog-list">
        {blogPosts.map((post) => (
          <article className="blog-card fade-in-up" key={post.id}>
            <img src={post.image} alt={post.title} />
            <div className="content">
              <span className="date">{post.date}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link to={`/blog-details/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
