import { Router } from "@reach/router";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App" >
      <Nav />
      <Router>
        <Home path="/home" />
        <Projects path="/projects" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
    </div>
  )

}

export default App;
