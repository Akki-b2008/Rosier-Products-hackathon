import { Menu, Search, ShoppingCart, UserPlus } from "lucide-react";
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
    ease: "power2.inOut" 
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
