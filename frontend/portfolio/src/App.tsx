import React from "react";
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <main className={styles.mainContent}>
        
        <Hero /> 
        <About />
        <Skills />
        <Projects />
        <Experience />

      </main>
    </div>
  );
};

export default App;
