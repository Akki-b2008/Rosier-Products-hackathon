import { useNavigate, useParams } from "react-router-dom";
import "./BlogDetails.css";
import { ArrowLeft } from "lucide-react";
import "./BlogDetails.css";

const blogPosts = [
  {
    id: 1,
    title: "The Journey of A2 Ghee",
    image:
      "https://ik.imagekit.io/sl8w2ayuc/Og/WhatsApp_Image_2023-07-09_at_12.18.57_PM.webp?updatedAt=1753369935756",
    date: "July 10, 2025",
    sections: [
      {
        heading: "A Deep Dive Into A2 Ghee",
        content: `A2 ghee is made from the milk of indigenous Indian cow breeds that naturally produce A2 beta-casein. This unique protein structure makes A2 ghee easier to digest, and many people find it gentler on the stomach compared to modern A1-based dairy.`,
      },
      {
        heading: "Rich in Nutrients",
        content: [
          "Vitamins A, D, E, and K: These fat-soluble vitamins support vision, immunity, skin health, and bone strength.",
          "Butyric acid: Promotes gut health and supports digestion.",
          "Conjugated Linoleic Acid (CLA): Known to aid in metabolism and fat burning.",
          "High smoke point (approximately 252°C): Makes it ideal for cooking without breaking down into harmful compounds.",
        ],
      },
      {
        heading: "The Art of Handmade Ghee",
        content: `Our ghee is prepared using the traditional Bilona method, which involves churning curd in clay pots with a wooden ladle. This time-honored process preserves both flavor and nutritional integrity, offering a richer, more authentic taste. No machines or industrial shortcuts—just pure craftsmanship.`,
      },
      {
        heading: "How to Use A2 Ghee",
        content: [
          "For cooking and sautéing, it adds depth of flavor and nutritional value.",
          "Spread it over toast or parathas for a wholesome start to your day.",
          "Stir a spoonful into your coffee for a smooth and creamy energy boost.",
          "Use it as a substitute for butter in baking for a more natural alternative.",
        ],
      },
      {
        heading: "Final Thoughts",
        content: `A2 ghee is more than just a cooking ingredient. It is a nourishing gift rooted in Indian tradition and Ayurvedic wisdom. For the highest benefits, always choose grass-fed, hand-churned A2 ghee crafted with care and authenticity.`,
      },
    ],
  },

  {
    id: 2,
    title: "Forest Honey & Tribal Harvesting",
    excerpt:
      "How our honey is sourced responsibly and what makes it truly wild and pure.",
    image:
      "https://ik.imagekit.io/sl8w2ayuc/Og/close-up-honeycomb-with-beeswax.webp?updatedAt=1753369936388",
    date: "July 5, 2025",
    fullContent: [
      {
        heading: "Wild & Ethical Sourcing",
        paragraphs: [
          "Our forest honey comes from remote tribal communities deep in Indian forests. It is hand-harvested and cold-filtered to preserve its natural goodness. Unlike commercial honey, it is never pasteurized, ensuring that its vital nutrients remain intact.",
        ],
      },
      {
        heading: "Why It’s Special",
        list: [
          "Unfiltered and raw to maintain natural properties.",
          "Retains beneficial enzymes and pollen.",
          "Offers antibacterial and antioxidant health benefits.",
        ],
      },
      {
        heading: "Traditional Uses",
        list: [
          "Sweetening herbal teas naturally.",
          "Soothing sore throats during seasonal changes.",
          "Glazing roasted nuts for a nutritious snack.",
          "Enhancing natural skincare routines.",
        ],
      },
      {
        heading: "Sustainability is Key",
        paragraphs: [
          "We work in partnership with tribal harvesters to ensure ethical sourcing practices. These collaborations promote forest conservation, fair trade income, and protection for vital pollinators like bees.",
          "By choosing our forest honey, you're supporting both ecosystems and indigenous communities who have preserved these traditional methods for generations.",
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Why Cold Pressed Oils Matter",
    excerpt:
      "Understand the traditional method of wood-pressing and why it matters to your health.",
    image:
      "https://ik.imagekit.io/sl8w2ayuc/Og/3_8b1bd8da-eff1-4e7e-8968-22ee057b6ef8.webp?updatedAt=1753369939075",
    date: "June 28, 2025",
    fullContent: [
      {
        heading: "Traditional Cold-Pressed Oils",
        paragraphs: [
          "Cold-pressed oils are extracted using slow, mechanical methods such as wooden or stone presses. This process involves no heat or chemicals, preserving essential nutrients like Omega-3 fatty acids, Vitamin E, and natural antioxidants.",
        ],
      },
      {
        heading: "Health Benefits",
        list: [
          "Higher antioxidant retention.",
          "Lower oxidation risk compared to refined oils.",
          "Rich natural aroma and flavor.",
          "Promotes better heart and skin health.",
        ],
      },
      {
        heading: "How to Use",
        list: [
          "Perfect for salad dressings, dips, and final drizzling.",
          "Can be added to yogurts, dals, or smoothies for extra richness.",
          "Warm gently with spices to enhance finishing dishes.",
        ],
      },
      {
        heading: "Final Note",
        paragraphs: [
          "For the most authentic experience and health benefits, always choose small-batch, single-source, cold-pressed oils made with care. They offer superior flavor, nutritional value, and sustainability.",
        ],
      },
    ],
  },
];

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
