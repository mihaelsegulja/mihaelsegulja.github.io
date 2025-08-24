import { useState } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Contact from "./components/ContactPopup";
import Projects from "./components/Projects";
import About from "./components/About";
import Hero from "./components/Hero";
import type { Tab } from "./types";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [showContact, setShowContact] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return <Projects/>;
      case "about":
        return <About/>;
      case "home":
      default:
        return <Hero onNavClick={setActiveTab}/>;
    }
  };

  return (
    <>
      <Header onNavClick={setActiveTab} onContactClick={() => setShowContact(true)} />
      <main id="content">{renderContent()}</main>
      <Footer />
      {showContact && <Contact onClose={() => setShowContact(false)} />}
    </>
  )
}

export default App
