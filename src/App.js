import './App.css';
import Features1 from './components/Features1';
import Features2 from './components/Features2';
import Hero from './components/Hero';
import Nav from './components/Nav';
import NewReleases from './components/NewReleases';
import PopularDesigns from './components/PopularDesigns';
function App() {
  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    <NewReleases></NewReleases>
    <PopularDesigns></PopularDesigns>
    <Features1></Features1>
    <Features2></Features2>
    </>
  );
}

export default App;
