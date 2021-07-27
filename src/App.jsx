import Navbar from './components/Header/Navbar';
import About from './components/Header/About';
import Shortener from './components/Shortener/Shortener';
import Stats from './components/Content/Stats';

function App() {

  return (
    <div>
       <Navbar />
       <About />
       <Shortener />
       <Stats />
    </div>
  )
}

export default App
