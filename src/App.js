import './App.css';

//components
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

//bootstrap link
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './Components/Events';
import Ngo_profile from './Components/Ngo_profile';


function App() {
  return (
    <>
      <Router>
          <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/ngoprof" element={<Ngo_profile/>} />
          
        </Routes>
          <Footer/>
      </Router>
  
    </>
  );
}

export default App;
