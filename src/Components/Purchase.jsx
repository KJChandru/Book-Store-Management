
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Purchase = () => {
  const [books, setBooks] = useState([]);
  const [name, setName] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/purchase')
      .then(response => {
        setBooks(response.data);
      })
      .catch(err => console.log(err));
    
    if (location.state && location.state.name) {
      setName(location.state.name);
    }
  }, [location.state]);

  const handleBuyNow = (bookId) => {
    axios.get(`http://localhost:4000/purchase/${bookId}`)
      .then(response => {
        navigate('/checkout', { state: { book: response.data } });
      })
      .catch(err => console.log(err));
  };  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 bg-dark sidebar">
          <div className="position-sticky">
            <div className="py-4 px-3">
              <h4 className="text-white">Book Store</h4>
            </div>
            <div>
              <p className="text-lg text-white">Welcome {name}</p>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/sell" className="nav-link text-white">Sell</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {books.map(book => (
              <div key={book._id} className="card" style={{ width: '18rem', margin: '1rem' }}>
                <img className="card-img-top" src={book.image} alt={book.bookname} />
                <div className="card-body">
                  <h5 className="card-title">{book.bookname}</h5>
                  <p className="card-text">{book.desc}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><b>Author:</b> {book.author}</li>
                  <li className="list-group-item"><b>Cost:</b> {book.cost}</li>
                </ul>
                <button
                  className="block mx-auto bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full"
                  onClick={() => handleBuyNow(book._id)}
                >
                  Buy now
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Purchase;
