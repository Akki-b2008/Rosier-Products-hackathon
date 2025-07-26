import { useNavigate, useParams } from "react-router-dom";
import "./BlogDetails.css";
import { ArrowLeft } from "lucide-react";
import "./BlogDetails.css";
import blogPosts from './BlogData'


export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.id === parseInt(id));
  if (!post) return <p>Blog not found</p>;

  const contentBlocks = post.sections || post.fullContent;

  return (
    <div className="main">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={24} />
      </button>
      <main className="blog-detail">
        <div className="banner">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="content">
          <h1>{post.title}</h1>
          <p className="date">{post.date}</p>

          {contentBlocks.map((block, index) => (
            <section key={index}>
              {block.heading && <h2>{block.heading}</h2>}

              {typeof block.content === "string" && <p>{block.content}</p>}

              {Array.isArray(block.content) && (
                <ul>
                  {block.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {block.paragraphs?.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              {block.list && (
                <ul>
                  {block.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
