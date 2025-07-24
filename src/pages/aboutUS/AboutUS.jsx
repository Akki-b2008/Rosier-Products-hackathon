import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./About.css";

export default function AboutPage() {
  useEffect(() => {
    gsap.utils.toArray(".about-section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <main className="about-page">
      <section className="about-section full-screen hero">
        <img
          src="https://ik.imagekit.io/sl8w2ayuc/Og/484051526_650232391086922_7846735457136928008_n.jpg?updatedAt=1753362035764"
          alt=""
        />
      </section>

      <section className="about-section split-section">
        <div className="text-block">
          <h2>Tradition Meets Taste</h2>
          <p>
            At Rosier, we believe the best food is rooted in culture. Our range
            — from Bilona ghee to wild forest honey — is crafted using ancestral
            methods to preserve both nutrition and nostalgia.
          </p>
        </div>

        <div className="image-block">
          <div className="image">
            <img
              src="https://ik.imagekit.io/sl8w2ayuc/Og/71pYpkxrg4L-removebg-preview.webp?updatedAt=1753167517594"
              alt="Bilona Ghee"
            />
          </div>
        </div>
      </section>

      <section className="about-section image-overlap">
        <div className="image-container">
          <img src="/images/wheat-flour.jpg" alt="Stone-pressed oil" />
        </div>
        <div className="text-content">
          <h2>Slow Food Philosophy</h2>
          <p>
            We don’t rush nature. Our small-batch nut butters and stone-pressed
            oils are crafted slowly to retain full nutritional value and rich,
            authentic flavor.
          </p>
        </div>
      </section>

      <section className="about-section grid-stories">
        <h2 className="center">What Makes Rosier Special</h2>
        <div className="grid">
          <div className="card">
            <img src="/images/story1.jpg" alt="Bilona Ghee" />
            <p>Hand-churned A2 Bilona ghee from grass-fed cow milk.</p>
          </div>
          <div className="card">
            <img src="/images/story2.jpg" alt="Wild Honey" />
            <p>
              Raw wild forest honey harvested sustainably by tribal foragers.
            </p>
          </div>
          <div className="card">
            <img src="/images/story3.jpg" alt="Stone Grinder" />
            <p>
              Fresh chakki-ground flours from native grains like KHAPLI WHEAT.
            </p>
          </div>
          <div className="card">
            <img src="/images/nutbutter.jpg" alt="Nut Butter" />
            <p>
              Small-batch nut butters made with 100% roasted nuts — no
              additives.
            </p>
          </div>
          <div className="card">
            <img src="/images/pooja.jpg" alt="Pooja Essentials" />
            <p>
              Traditional pooja materials like camphor, cotton wicks, and pure
              ghee.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section quote">
        <blockquote>
          "We bring you food that’s honest — untouched by chemicals, rich in
          legacy."
        </blockquote>
      </section>
    </main>
  );
}
