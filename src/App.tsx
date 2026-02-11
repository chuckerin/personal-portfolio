import { Navbar } from './layout/Navbar';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Testimonials } from './sections/Testimonials';

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
