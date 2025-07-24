import { Link } from "react-router-dom";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "The Journey of A2 Ghee",
    excerpt:
      "Discover why A2 Ghee is revered in Ayurveda and how it's different from regular ghee.",
    image:
      "https://ik.imagekit.io/sl8w2ayuc/Og/WhatsApp_Image_2023-07-09_at_12.18.57_PM.webp?updatedAt=1753369935756",
    date: "July 10, 2025",
  },
  {
    id: 2,
    title: "Forest Honey & Tribal Harvesting",
    excerpt:
      "How our honey is sourced responsibly and what makes it truly wild and pure.",
    image:
      "https://ik.imagekit.io/sl8w2ayuc/Og/close-up-honeycomb-with-beeswax.webp?updatedAt=1753369936388",
    date: "July 5, 2025",
  },
  {
    id: 3,
    title: "Why Cold Pressed Oils Matter",
    excerpt:
      "Understand the traditional method of wood-pressing and why it matters to your health.",
    image:
      "https://ik.imagekit.io/sl8w2ayuc/Og/3_8b1bd8da-eff1-4e7e-8968-22ee057b6ef8.webp?updatedAt=1753369939075",
    date: "June 28, 2025",
  },
];

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
