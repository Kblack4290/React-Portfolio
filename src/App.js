import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css';
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      
        <Route exact path = "/" component = {About} /> 
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
