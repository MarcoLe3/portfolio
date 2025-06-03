import AboutMe from '../components/cards/AboutMe.jsx';
import Experience from '../components/cards/Experience';
import Footer from '../components/cards/Footer.jsx';
import Hero from '../components/cards/hero.jsx';
import Nav from '../components/cards/Nav.jsx';

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Experience/>
    </div>
  );
}