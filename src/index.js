import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <About />
    <Services />
    <Skills />
    <Projects />
  

    <Footer />
  </>
);

reportWebVitals();
