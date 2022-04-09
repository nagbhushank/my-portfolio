import './App.css';
import Navbar from './Components/Navigation';
import Title from './Components/Title';
import Profile from './Components/Profile';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Project from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Profile />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
