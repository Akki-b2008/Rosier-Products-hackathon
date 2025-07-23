import Navbar from "./components/navBar/Navbar";

import Footer from "./components/footer/Footer";

import MainRoutes from "./routes/MainRoutes";

import Auth from './pages/authForm/AuthForm'

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
      <Auth />
    </div>
  );
};

export default App;
