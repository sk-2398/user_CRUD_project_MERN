import './App.css';
import {Route, Routes} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/HomePage';
import AddEdit from './components/AddEdit';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <ToastContainer position='top-center'/>
      <Routes>
      <Route path="/" element={<HomePage />} ></Route>
      <Route path="/adduser" element={<AddEdit />} ></Route>
      <Route path="/updateuser/:id" element={<AddEdit />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
