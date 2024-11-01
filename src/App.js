import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import LearnReact from './pages/LearnReact';
import Api from './services/Api';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/dashboard' element = {<Dashboard />}/>
        <Route path='/learnreact' element={<LearnReact />}/>
        <Route path='/api' element={<Api />} />
      </Routes>
    </Router>
  );
}

export default App;