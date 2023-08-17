import EventScroll from './Components/EventScroll';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import SearchByGenre from './Components/SearchByGenre';
import Societies from './Components/Societies';
import UpcomingEvents from './Components/UpcomingEvents';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <EventScroll/>
      <UpcomingEvents/>
      <SearchByGenre/>
      <Societies/>
    </div>
  );
}

export default App;
