import './App.css';
import { Routes, Route } from 'react-router-dom';
import Formulario from './formularios/formulario';

function App() {
  return (
    <Routes>
      <Route path='/form' element={<Formulario titulo="Titulo" />} />
    </Routes>
  );
}

export default App;
