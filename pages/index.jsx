
import Hero from '../components/sections/hero.jsx';
import TopHomeNav from '../components/nav/topnav.jsx';
import Project from '../components/sections/Project.jsx'

export default function Home() {
  return (
    <div>
      {/* <Nav/> */}
      <TopHomeNav/>
      <Hero/>
      <Project/>
      {/* <Experience/> */}
    </div>
  );
}