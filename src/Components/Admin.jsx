import { Menu } from "antd";
import React from 'react';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { PowerOffOutlined } from "@mui/icons-material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Customer from "./Customer";
import Books from "./Books";
import UploadBook from "./UploadBook";

function Admin(){
    const navigate = useNavigate();
    return (
        <div className="flex flex-row bg-gray-100 min-h-screen">
            
            <div className="w-1/4 bg-gray-800 text-white">
                <div className="p-4 text-center text-xl font-bold">Admin Dashboard</div>
                <Menu 
                    className="mt-9"
                    onClick={({ key }) => {
                        if(key === 'Signout') {
                            ///
                        } else {
                            navigate(key);
                        }
                    }}
                    items={[
                        { label: "New arrivals", key:'/customer', icon: <AccountCircleIcon /> },
                        { label: "Books", key:'/books', icon: <ImportContactsIcon /> },
                        { label: "Upload book", key:'/uploadbook', icon: <CloudUploadIcon /> },
                        { label: "Signout", key:'/', icon:<PowerOffOutlined />, danger:true }
                    ]}
                />
            </div>
            
            <Content className="flex-grow" />
        </div>
    );
}

function Content() {
    return (
        <div className="p-4">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Admin Information</h2>
                <p className="text-gray-700">Welcome, Admin! You can manage your books and customers here.</p>
            </div>
            <Routes>
                <Route path='/cutomer' element={<div><Customer/></div>} />
                <Route path='/books' element={<div><Books/></div>} />
                <Route path='/uploadbook' element={<div><UploadBook/></div>} />
            </Routes>
        </div>
    );
}

export default Admin;
