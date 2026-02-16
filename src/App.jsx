import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import SolarCalculator from './components/home/SolarCalculator';
import TrustGallery from './components/home/TrustGallery';
import PumpGrid from './components/home/PumpGrid';
import MobileContactBar from './components/ui/MobileContactBar';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={
      <main>
        <Hero />
        <TrustGallery />
        <SolarCalculator />
        <PumpGrid />
      </main>
      } />
      {/* DEDICATED PRODUCTS PAGE ROUTE */}
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <MobileContactBar />
    </div>
    </HashRouter>
  );
}

export default App;