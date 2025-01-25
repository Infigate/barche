import './App.css';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Location from './components/Location';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Service />
      <Location/>
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default App;