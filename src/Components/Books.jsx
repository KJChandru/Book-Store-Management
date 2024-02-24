import React, { useEffect,useState } from 'react'
import axios from 'axios'


const Books = () => {

  const[books,setBooks]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/books')
    .then(response=>{setBooks(response.data)})
    .catch(err=>{console.log(err)})

  },[])

  return (
    
    <div className="container mt-4">
    <div className="table-responsive">
    <table class="table table-striped">
        <thead className="bg-dark text-white">
          <tr>
            
            <th className="px-4 py-2">Bookname</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Cost</th>
          </tr>
        </thead>
        <tbody>
          {books.map(books => 
          (
            <tr key={books._id}>
              <td className="border px-4 py-2">{books.bookname}</td>
              <td className="border px-4 py-2">{books.author}</td>
              <td className="border px-4 py-2">{books.cost}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  )
}

export default Books