import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Info from "./components/Info";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contract from "./components/Contract";
function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <AboutMe />
      <Experience />
      <Project />
      <Contract />
    </div>
  );
}

export default App;
