import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Technologies from "./components/Tecnologies/Technologies";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Works from "./components/Works/Works";
import "./styles/styles.scss";

function App() {
  return (
    <main className="main">
      <NavBar />
      <Home />
      <WorkExperience />
      <Works />
      <Technologies />
      <Footer />
      <ScrollTop/>
    </main>
  );
}

export default App;
