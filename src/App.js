import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Favorites from "./components/favorites";
import HeroSection from "./components/heroSection";
import Categories from "./components/categories";
import MobileApp from "./components/mobileApp";
import Cards from "./components/cards";
import Footer from "./components/footer";
import BottomFooter from "./components/bottomFooter";
import Modal from "./components/modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header setIsOpen={setIsOpen} />
          {isOpen && <Modal setIsOpen={setIsOpen} />}

          <HeroSection />
          <Categories />
          <div className="container mx-auto grid gap-y-6 pt-8">
            <Favorites />
            <MobileApp />
            <Cards />
            <Footer />
            <BottomFooter />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
