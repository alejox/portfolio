import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Technologies from './components/Tecnologies/Technologies';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Works from './components/Works/Works';
import './styles/styles.scss'

function App() {
  return <main className='main'>
    <NavBar/>
    <Header/>
    <WorkExperience/>
    <Works/>
    <Technologies/>
    <Footer/>
  </main>;
}

export default App;
