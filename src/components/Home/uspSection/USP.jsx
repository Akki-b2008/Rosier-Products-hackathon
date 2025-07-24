import React, { useEffect } from "react";
import { Leaf, Flame, PackageCheck, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import Marquee from "./marquee/Marquee";
import "./USP.css";

const USP = () => {
  useEffect(() => {
    const runAnimation = () => {
      gsap.from(".usps-heading", {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".usp-card", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      });

    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(runAnimation);
    } else {
      window.addEventListener("load", runAnimation);
      return () => window.removeEventListener("load", runAnimation);
    }
  }, []);

  return (
    <>
      <Marquee />

      <section className="usps">
        <h2 className="usps-heading">
          why <span className="rosier">ROSIER ?</span>
        </h2>

        <div className="usp-grid">
          <div className="usp-card">
            <Leaf className="usp-icon" size={36} />
            <h3 className="usp-title">100% Natural</h3>
            <p className="usp-text">
              No preservatives or chemicals - just nature's best.
            </p>
          </div>

          <div className="usp-card">
            <Flame className="usp-icon" size={36} />
            <h3 className="usp-title">Traditional Vedic Method</h3>
            <p className="usp-text">
              Crafted over slow flame as per ancient traditions.
            </p>
          </div>

          <div className="usp-card">
            <PackageCheck className="usp-icon" size={36} />
            <h3 className="usp-title">Lab Tested</h3>
            <p className="usp-text">Certified purity and quality assurance.</p>
          </div>

          <div className="usp-card">
            <ShieldCheck className="usp-icon" size={36} />
            <h3 className="usp-title">Safe & Secure</h3>
            <p className="usp-text">
              We follow hygienic practices and secure packaging.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default USP;
