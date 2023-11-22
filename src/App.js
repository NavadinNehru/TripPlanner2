import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Componenets/Navbar/Navbar';
import Footer from './Componenets/Footer/Footer';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import Flight from './Pages/Flight';
import Domestic from './Pages/Domestic';
import International from './Pages/International';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/international' element={<International/>}/>
        <Route path='/domestic' element={<Domestic/>}/>
        <Route path='/flight' element={<Flight/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;