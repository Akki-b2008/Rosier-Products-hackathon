import Navbar from "./components/navBar/Navbar";

import Footer from "./components/footer/Footer";

import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
