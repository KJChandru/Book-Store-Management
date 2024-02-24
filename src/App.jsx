import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Admin from './Components/Admin';
import Customer from './Components/Customer';
import Books from './Components/Books';
import Purchase from './Components/Purchase';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadBook from './Components/UploadBook';
import Checkout from './Components/Checkout';
import Sell from './Components/Sell';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reg' element={<SignUp />} />
        <Route path='/books' element={<Books/>}/>
        <Route path='/admin/*' element={<Admin/>}/>
        <Route path='/purchase' element={<Purchase/>}/>
        <Route path='/customer' element={<Customer />} />
        <Route path='/uploadbook' element={<UploadBook/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/sell' element={<Sell/ >}/>
        
      </Routes>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;

