import ClickEffect from './components/ClickEffect';
import Header from './components/Header';
import Hero from './components/Hero';
import HardwareComplex from './components/HardwareComplex';
import VideoBlock from './components/VideoBlock';
import ImageSlider from './components/ImageSlider';
import Features from './components/Features';
import Economics from './components/Economics';
import Footer from './components/Footer';
import {
  footerContent,
  galleryItems,
  hardwareCards,
  navLinks,
  sensorItems,
} from './data/siteContent';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-on-background antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <ClickEffect />
      <Header links={navLinks} />
      <main className="overflow-x-hidden">
        <Hero />
        <HardwareComplex cards={hardwareCards} sensors={sensorItems} />
        <VideoBlock />
        <ImageSlider items={galleryItems} />
        <Features />
        <Economics />
      </main>
      <Footer content={footerContent} />
    </div>
  );
}

export default App;
