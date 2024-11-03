import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import LearnReact from './pages/LearnReact';
//import Requisitions from './pages/Requisitions';
import ReadCars from './services/ReadCars';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/dashboard' element = {<Dashboard />}/>
        <Route path='/learnreact' element={<LearnReact />}/>
  
        <Route path='/readCars' element={<ReadCars />} />
      </Routes>
    </Router>
  );
}

export default App;