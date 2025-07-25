// ✅ CORRECT: pass the icon as a reference, not JSX
import {
  House,
  Store,
  BookUser,
  SquarePen,
  ShoppingCart,
} from "lucide-react";

export const navLinks = [
  { label: "Home", to: "/", icon: House },
  { label: "Products", to: "/products", icon: Store },
  { label: "About", to: "/about", icon: BookUser },
  { label: "BLOG", to: "/blog", icon: SquarePen },
  { label: "Cart", to: "/cart", icon: ShoppingCart  },
];
