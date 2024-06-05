import styles from "./App.module.css";
import { Solucao } from "./components/Solucao/Solucao";
import { Contact } from "./components/Contact/Contact";
import { Tecnologias } from "./components/Tecnologias/Tecnologias";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";



function App() {
  return (
      <div className={styles.App}>
        
        <Navbar />
        <Hero />
        <Solucao />
        <Tecnologias />
        <Contact />
      </div>
  );
}

export default App;
