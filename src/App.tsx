import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/ContactPopup";
import Projects from "./components/Projects";
import About from "./components/About";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <Header onContactClick={() => setShowContact(true)} />
      <main id="content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      {showContact && <Contact onClose={() => setShowContact(false)} />}
    </>
  );
}

export default App;
