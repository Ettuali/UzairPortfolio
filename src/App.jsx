import React, { useState } from "react";

// Components
import Preloader from "./components/Preloader";
import PortfolioNav from "./components/PortfolioNav";
import CyberFiction from "./components/CyberFiction";
import CinematicHoverEffect from "./components/CinematicHoverEffect";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ScrollReveal from "./components/ScrollReveal";
import "./App.css";
import SplashCursor from './components/SplashCursor'
import TextPressure from "./components/Footer";
import ContactUs from './components/ContactUs'
import FallingText from './components/Two';
// --- NEW IMPORT ---
import Music from './components/Music'; // Assuming Music.jsx is in the components folder

function App() {
  const [isSiteEntered, setIsSiteEntered] = useState(false);

  const handleEnterSite = () => setIsSiteEntered(true);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home", link: "#home" },
    { label: "Projects", ariaLabel: "Go to projects", link: "#projects" },
    { label: "Experience", ariaLabel: "Go to experience", link: "#experience" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">


      {!isSiteEntered && <Preloader onEnter={handleEnterSite} />}

      {isSiteEntered && (
        <>
        <SplashCursor />
          <PortfolioNav
            position="left"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#000000"
            changeMenuColorOnOpen={true}
            colors={["#B19EEF", "#5227FF"]}
            accentColor="#fff"
          />
        
        {/* --- MUSIC PLAYER PLACEMENT (NOW FIXED BOTTOM-RIGHT) --- */}
        <div className="fixed bottom-10 right-4 z-50">
            <Music />
        </div>
        
        <section id="home">
          <CyberFiction />
        </section>

          <Projects />
          <CinematicHoverEffect />
        <section id="experience">
          <Experience />
        </section>


        <ContactUs/>


          <TextPressure 
          />


        <div style={{position: 'relative', height: '300px'}}>
        <FallingText
            text={`React, JavaScript (ES6+), TypeScript, Redux, Context API, React Hooks, HTML5, CSS3, Tailwind CSS, Styled Components, Bootstrap, Node.js, Express.js, MySQL, MongoDB, RESTful APIs, Axios, Git, GitHub, Vite, Webpack, Babel, Three.js, GSAP, Framer Motion, Firebase`}
          highlightWords={["React", "Bits", "animated", "components", "simplify"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
        </div>


        </>
      )}
    </div>
  );
}

export default App;