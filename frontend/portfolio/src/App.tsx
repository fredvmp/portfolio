import React from "react";
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <main className={styles.mainContent}>
        
        <Hero /> 
        <About />
        <Skills />

      </main>
    </div>
  );
};

export default App;
