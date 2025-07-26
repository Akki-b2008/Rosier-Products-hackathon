import { Suspense, lazy } from "react";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
const Navbar = lazy(() => import("./components/navBar/Navbar"));
const Footer = lazy(() => import("./components/footer/Footer"));
const MainRoutes = lazy(() => import("./routes/MainRoutes"));
import Loader from './components/loader/Loader'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Navbar />
        <MainRoutes />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
