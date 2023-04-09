import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, Gumroad, Merch } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="items-center justify-center flex p-3 sm:p-0">
        <iframe
          className="border-2 border-white p-3"
          width="853"
          height="480"
          src="https://www.youtube.com/embed/JSLgXXx-4A8"
          title="Introducing the Mechanical Creature Kit"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <Insights />
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
