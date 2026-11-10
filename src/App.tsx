import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Experiments from './components/Experiments';
import EngineeringInterests from './components/EngineeringInterests';
import ArchivedWork from './components/ArchivedWork';
import CurrentExploration from './components/CurrentExploration';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-navy-deep min-h-screen text-white font-sans antialiased selection:bg-pink selection:text-white relative overflow-x-hidden w-full">
      <Navigation />

      <main id="main-content">
        <Hero />
        <SelectedWork />
        <Experiments />
        <EngineeringInterests />
        <ArchivedWork />
        <CurrentExploration />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
