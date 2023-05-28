import Login from './pages/Login'
import ChoseClass from "./pages/ChoseClass";
import Ranking from './pages/Ranking'
import CadastroTercerios from './pages/CadastroTerceiros'
import Class from './pages/Class';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/choseClass" element={<ChoseClass />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/cadastroTercerios" element={<CadastroTercerios />} />
        <Route path="/class" element={<Class />} />
      </Routes>
    </Router>
  );
}
 
export default App;
