import './App.css';
import ResusableButton from './components/ReusableButton';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import LearnReact from './pages/LearnReact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/dashboard' element = {<Dashboard />}/>
        <Route path='/learnreact' element={<LearnReact />}/>
      </Routes>
    </Router>
  );
}

export default App;