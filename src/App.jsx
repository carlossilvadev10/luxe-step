import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import About from "./components/About";
import Shop from "./components/Shop";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className = "bg-white text-tertiary overflow-x-hidden">
      <Header menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <Nav menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <Hero />
      <Featured />
      <About />
      <Shop />
      <Subscription />
      <Footer />
    </div>
  )
}

export default App;
