import {
    BookUser, House, MessageCircleQuestionMark, Store
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import gsap from "gsap";
import React, { useEffect, useRef } from 'react';
import { navLinks } from '../navlink/NavLink';
import "./Menu.css";
 
const MotionNavLink = motion.create(NavLink);
 
const MenuIcon = (isOpen,setIsOpen) => {
    const containerRef = useRef();
 
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".nav_link", {
                x: 50,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.08,
            });
        }, containerRef);
 
        return () => ctx.revert();
    }, []);
 
    return (
        <div className="menu_items" ref={containerRef}>
            {navLinks.map((link, index) => (
                <MotionNavLink
                    key={index}
                    to={link.to}
                    className="nav_link"
                    onClick={() => setIsOpen(false)}
                    whileHover={{
                        scale: 1.05,
                        rotate: 0.1,
                        transition: {
                            duration: 0.4,
                            ease: [0.25, 1, 0.5, 1],
                        },
                    }}
                >
                    {React.createElement(link.icon, { size: 18 })}
                    <span>{link.label}</span>
                </MotionNavLink>
            ))}
        </div>
    );
};
 
export default MenuIcon;