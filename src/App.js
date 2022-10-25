import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Newsletter />
      <Cards />
      <Footer />
      {/* <Login /> */}
      {/* <Nav /> */}
    </>
  );
}

export default App;
