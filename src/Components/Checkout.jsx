import React ,{ useContext } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext'

const Checkout = () => {
  const location = useLocation();
  const book = location.state.book;
  const navigate=useNavigate()
  const { signOut } = useContext(AuthContext);
  


  const handleConfirmPurchase = () => {
    
    axios.post('http://localhost:4000/checkout', book)
      .then(response => {
        
        console.log("Purchase confirmed and data stored:", response.data);
        toast.success("Purchase confirmed!", { autoClose: 2000 }); 
      })
      .catch(error => {
        
        console.error("Error confirming purchase:", error);
        toast.error("Error confirming purchase. Please try again later.");
      });
  };

  const handleSignOut = () => {
    signOut();
    localStorage.removeItem('token');


    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
        <div className="border-b border-gray-200 pb-1 mb-6">
          <p className="text-lg font-semibold mb-2">Book Name:</p>
          <p className="text-lg">{book.bookname}</p>
        </div>
        <div className="border-b border-gray-200 pb-1 mb-6">
          <p className="text-lg font-semibold mb-2">Author:</p>
          <p className="text-lg">{book.author}</p>
        </div>
        <div className="border-b border-gray-200 pb-1 mb-6">
          <p className="text-lg font-semibold mb-2">Cost:</p>
          <p className="text-lg">{book.cost}</p>
        </div>
        <button 
          className="block mx-auto bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full mb-4"
          onClick={handleConfirmPurchase} 
        >
          Confirm Purchase
        </button>
        <button 
          className="block mx-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full"
          onClick={handleSignOut} 
        >
          Sign Out
        </button>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default Checkout;
