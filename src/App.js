import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error'
import Donasi from './pages/Donasi';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/error" element={<Error />}/>
        <Route path="/donasi" element={<Donasi />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
