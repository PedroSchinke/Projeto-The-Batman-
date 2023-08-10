import './App.css';
import Home from './pages/home';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentários/comentários';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter className="App">
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/fotos' element={<Fotos/>}/>
        <Route path='/comentarios' element={<Comentarios/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
