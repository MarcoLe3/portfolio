import AboutMe from '../components/cards/AboutMe.jsx';
import Experience from '../components/cards/Experience';
import Footer from '../components/cards/Footer.jsx';
import Hero from '../components/cards/hero.jsx';
import Nav from '../components/cards/Nav.jsx';
import TopHomeNav from '../components/cards/topnav.jsx';

export default function Home() {
  return (
    <div>
      <Nav/>
      <TopHomeNav/>
      <Hero/>
      <Experience/>
    </div>
  );
}