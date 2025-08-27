import Experience from '../components/sections/Experience';
import Hero from '../components/sections/hero.jsx';
import Nav from '../components/nav/Nav.jsx';
import TopHomeNav from '../components/nav/topnav.jsx';

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