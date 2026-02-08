import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/ContactModal";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Hero from "./pages/Hero";
import { useState } from "react";
import ProjectModal from "./components/ProjectModal";

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <Header onContactClick={() => setShowContact(true)} />
      <main id="content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />}>
            <Route path=":projectSlug" element={<ProjectModal />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      {showContact && <Contact onClose={() => setShowContact(false)} />}
    </>
  );
}

export default App;
