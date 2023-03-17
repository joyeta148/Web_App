import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Intro } from './components/Intro/Intro';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';
import { Feature } from './components/Feature/Feature';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <header className="App-header">
        <Feature />
      </header>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
