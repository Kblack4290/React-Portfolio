import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import About from './pages/About'
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      
        <Route exact path = "/" component = {About} /> 
        <Route exact path="/About" component={About} />
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
