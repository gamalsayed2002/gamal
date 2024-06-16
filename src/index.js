
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/about/About';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <About/>
    <Services/>
    <Skills/>
    <Projects/>
  
  </>
);

reportWebVitals();
