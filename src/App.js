import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Developers from './components/Developers';
import Newsletter from './components/Newsletter';
import Team from './components/Team';
import Clients from './components/Clients';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Developers />
      <Team />
      <Clients />
      <Newsletter />
     
      

    </div>
  );
}

export default App;
