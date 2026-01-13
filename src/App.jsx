import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import SolarCalculator from './components/home/SolarCalculator';
import TrustGallery from './components/home/TrustGallery';
import PumpGrid from './components/home/PumpGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <TrustGallery />
        <SolarCalculator />
        <PumpGrid />
      </main>
    </div>
  );
}

export default App;