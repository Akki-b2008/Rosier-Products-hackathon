import { Menu, Search, ShoppingCart, UserPlus } from "lucide-react";
import "./Navbar.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();
  const userRef = useRef();

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power1.out",
      });
    }
  }, []);
  const handleHover = (ref) => {
    gsap.to(ref.current, {
      scale: 1.25,
      y: -4,
      rotate: 2,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = (ref) => {
    gsap.to(ref.current, {
      scale: 1,
      y: 0,
      rotate: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="NavBar">
      <div className="logo">
        <img
          src="https://ik.imagekit.io/sl8w2ayuc/Og/logo_1_1_bb8fb2d6-681f-4ca4-aad5-5dbc7e581ce4.webp?updatedAt=1753033753018"
          alt=""
        />
      </div>

      <div ref={navRef} className="nav_center">
        <NavLink
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to={"/"}
        >
          <h2>Home</h2>
        </NavLink>

        <NavLink
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to={"/products"}
        >
          <h2>Products</h2>
        </NavLink>

        <NavLink
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to={"/about"}
        >
          <h2>About</h2>
        </NavLink>

        <NavLink
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to={"/contact-us"}
        >
          <h2>Contact Us</h2>
        </NavLink>
      </div>

      <div className="nav_right">
        <span
          ref={searchRef}
          onMouseEnter={() => handleHover(searchRef)}
          onMouseLeave={() => handleLeave(searchRef)}
          style={{ display: "inline-block", cursor: "pointer" }}
        >
          <Search className="Search" />
        </span>

        <span
          ref={cartRef}
          onMouseEnter={() => handleHover(cartRef)}
          onMouseLeave={() => handleLeave(cartRef)}
          style={{ display: "inline-block", cursor: "pointer" }}
        >
          <ShoppingCart  style={{
          color: "white",
          textDecoration: 'none'
        }} className="Cart" />{" "}
        </span>

        <span
          ref={userRef}
          style={{ display: "inline-block", cursor: "pointer" }}
          onMouseEnter={() => handleHover(userRef)}
          onMouseLeave={() => handleLeave(userRef)}
        >
          <NavLink style={{
          color: "white",
          textDecoration: 'none'
        }} to={"/user"}>
            <UserPlus className="User" />
          </NavLink>
        </span>

        <Menu className="Menu" />
      </div>
    </div>
  );
};

export default Navbar;
