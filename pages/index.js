import { Footer, Navbar } from '../components';
import { About, Youtube, Feedback, ProductShowcase, Hero, Patreon, Gumroad, Merch, EmbedVideo } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Youtube />
    </div>
    <div className="relative">
      <ProductShowcase />
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <EmbedVideo />
    </div>
    <div className="relative">
      <Patreon />
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <Gumroad />
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <Merch />
      <div className="gradient-03 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
