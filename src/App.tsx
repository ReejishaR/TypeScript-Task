
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './components/tablecomponents/Table';
import AddTable from './components/tablecomponents/AddTable';
import EditTable from './components/tablecomponents/EditTable';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Table/>}/>
      <Route path='/add' element={<AddTable/>}/>
      <Route path='/edit/:id' element={<EditTable/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
