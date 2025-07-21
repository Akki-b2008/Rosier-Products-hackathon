import { Menu, Search, ShoppingCart, UserPlus, UserRound } from "lucide-react";
import "./Navbar.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

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
  const tl = gsap.timeline();

  tl.to(ref.current, {
    scale: 1.4,
    rotate: 5,
    y: -3,
    transformOrigin: "center center",
    duration: 0.2,
    ease: "power3.out",
  })
  .to(ref.current, {
    scale: 1.25,
    rotate: -5,
    duration: 0.2,
    ease: "power3.inOut",
  })
  .to(ref.current, {
    scale: 1.3,
    rotate: 0,
    duration: 0.15,
    ease: "power1.out",
  });
};

const handleLeave = (ref) => {
  gsap.to(ref.current, {
    scale: 1,
    y: 0,
    rotate: 0,
    duration: 0.4,
    ease: "power4.out",
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
        <h2>Home</h2>
        <h2>Products</h2>
        <h2>Catogaries</h2>
        <h2>About</h2>
      </div>

      <div className="nav_right">
        <Search
          ref={searchRef}
          className="Search"
         onMouseEnter={() => handleHover(searchRef)}
          onMouseLeave={() => handleLeave(searchRef)}
          style={{ display: "inline-block", cursor: "pointer" }}
        />
        <ShoppingCart
          ref={cartRef}
          className="Cart"
         onMouseEnter={() => handleHover(cartRef)}
          onMouseLeave={() => handleLeave(cartRef)}
          style={{ display: "inline-block", cursor: "pointer" }}
        />
        <UserPlus
          ref={userRef}
          className="User"
        onMouseEnter={() => handleHover(userRef)}
          onMouseLeave={() => handleLeave(userRef)}
          style={{ display: "inline-block", cursor: "pointer" }}
        />
        <Menu className="Menu" />
      </div>
    </div>
  );
};

export default Navbar;
