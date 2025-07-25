import { CircleUserRound, Menu, Search, ShoppingCart, X } from "lucide-react";
import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import MenuHeader from "./menu/Menu";

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="NavBar">
      {isOpen && <MenuHeader isOpen={isOpen} setIsOpen={setIsOpen} />}

      <div className="logo">
        <NavLink to={"/"}>
          <img
            src="https://ik.imagekit.io/sl8w2ayuc/Og/logo_1_1_bb8fb2d6-681f-4ca4-aad5-5dbc7e581ce4.webp?updatedAt=1753033753018"
            alt=""
          />
        </NavLink>
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
          to={"/blog"}
        >
          <h2>Community</h2>
        </NavLink>
      </div>

      <div className="nav_right">
        <span style={{ display: "inline-block", cursor: "pointer" }}>
          <Search className="Search" size={30} />
        </span>

        <span style={{ display: "inline-block", cursor: "pointer" }}>
          <NavLink
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to={'/cart'}
          >
          <ShoppingCart
            style={{
              color: "white",
              textDecoration: "none",
            }}
            size={30}
            className="Cart"
          />
          </NavLink>
        </span>

        <span style={{ display: "inline-block", cursor: "pointer" }}>
          <NavLink
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to={"/user"}
          >
            <CircleUserRound className="User" size={30} />
          </NavLink>
        </span>

        <span onClick={() => setIsOpen(!isOpen)} className="nav_right_menu">
          {!isOpen ? <Menu size={32} /> : <X size={32} />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
