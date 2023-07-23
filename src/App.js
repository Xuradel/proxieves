import './App.css';
import Features1 from './components/Features1';
import Features2 from './components/Features2';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import NewReleases from './components/NewReleases';
import PopularDesigns from './components/PopularDesigns';
import Sponsors from './components/Sponsors';
function App() {
  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    <NewReleases></NewReleases>
    <PopularDesigns></PopularDesigns>
    <Features1></Features1>
    <Sponsors></Sponsors>
    <Features2></Features2>
    <Footer></Footer>
    </>
  );
}

export default App;
