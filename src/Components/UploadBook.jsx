import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UploadBook() {
  const [bookname,setbookname]=useState();
  const [desc,setdesc]=useState();
  const [image,setimage]=useState();
  const [cost,setcost]=useState();
  const[author,setauthor]=useState();
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:4000/uploadbook",{bookname,author,desc,image,cost})
    .then(result=>{console.log(result)
      {navigate('/admin')}
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Upload Book</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="bookName" className="block text-sm font-medium text-gray-700">Book Name</label>
            <input id="bookName" name="bookName" type="text" autoComplete="off" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={(e)=>setbookname(e.target.value)} />
          </div>
          <div>
            <label htmlFor="cost" className="block text-sm font-medium text-gray-700">Author</label>
            <input
              id="author"
              name="author"
              type="text"
              autoComplete="off"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e)=>setauthor(e.target.value)}
              
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <input  id="description" name="description" type="text" autoComplete="off"   required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={(e)=>setdesc(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="imageLink" className="block text-sm font-medium text-gray-700">Image Link</label>
            <input
              id="imageLink"
              name="imageLink"
              type="text"
              autoComplete="off"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e)=>setimage(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cost" className="block text-sm font-medium text-gray-700">Cost</label>
            <input
              id="cost"
              name="cost"
              type="text"
              autoComplete="off"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e)=>setcost(e.target.value)}
              
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-indigo-500 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadBook;
