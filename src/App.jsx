import Navbar from './components/Header/Navbar';
import About from './components/Header/About';
import Shortener from './components/Shortener/Shortener';
import Stats from './components/Content/Stats';
import BoostLinks from './components/Footer/BoostLinks';

function App() {

  return (
    <div>
       <Navbar />
       <About />
       <Shortener />
       <Stats />
       <BoostLinks />
    </div>
  )
}

export default App
