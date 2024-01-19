
import './App.css';
import About from './components/About.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Speakers from './components/Speakers.js';
import Tickets from './components/Tickets.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Speakers/>
      <Tickets/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
