import { Router } from "@reach/router";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" >
      <Nav />
      <Router>
        <Home path="/react-vg-portfolio" />
        <Projects path="/projects" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
      <Footer />
    </div>
  )

}

export default App;
