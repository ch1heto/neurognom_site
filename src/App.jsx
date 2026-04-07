import Header from './components/Header';
import Hero from './components/Hero';
import HardwareComplex from './components/HardwareComplex';
import ImageSlider from './components/ImageSlider';
import Features from './components/Features';
import Footer from './components/Footer';
import {
  footerContent,
  galleryItems,
  hardwareCards,
  navLinks,
  sensorItems,
} from './data/siteContent';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-on-background antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header links={navLinks} theme={theme} onToggleTheme={toggleTheme} />
      <main className="overflow-x-hidden">
        <Hero />
        <HardwareComplex cards={hardwareCards} sensors={sensorItems} />
        <ImageSlider items={galleryItems} />
        <Features />
      </main>
      <Footer content={footerContent} />
    </div>
  );
}

export default App;
