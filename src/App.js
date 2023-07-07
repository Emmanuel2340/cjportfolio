import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="h-full w-full sm:h-full sm:w-full">
      <Navbar/>
      <section>
        <Home/>
        <About/>
      </section>
    </div>
  );
}

export default App;
