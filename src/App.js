import { Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/Footer'
import './App.css';


function App() {
  return (
    // <Router>
    <div className="App">
      <Navbar />
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
