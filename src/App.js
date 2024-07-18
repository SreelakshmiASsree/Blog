// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Main from './components/Dashboard/Main';
import{ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Dashboard' element={<Main />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
