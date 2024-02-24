import { useState } from "react";
import React from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

function Sell  ()  {
    const[username,Setusername]=useState()
    const[bookname,Setbookname]=useState()
    const[author,Setauthor]=useState()
    const[desc,Setdesc]=useState()
    const[cost,Setcost]=useState()
 const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/sell',{username,bookname,author,desc,cost})
        .then(result=>{console.log(result)
            alert("Book added to db");
            navigate('/purchase')
        })
        .catch(err=>console.log(err))
        
    }




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sell Your Book</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input id="user" name="user" type="text"  required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={(e)=>Setusername(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700"> Book Name</label>
            <input id="username" name="username" type="text" autoComplete="username" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"onChange={(e)=>Setbookname(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Author</label>
            <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={(e)=>Setauthor(e.target.value)} />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <input id="desc" name="cost" type="text"  required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={(e)=>Setdesc(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="cost" className="block text-sm font-medium text-gray-700">Cost</label>
            <input id="cost" name="cost" type="text"  required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" onChange={(e)=>Setcost(e.target.value)}/>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center bg-indigo-500 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sell;
