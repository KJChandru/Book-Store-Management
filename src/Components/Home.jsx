import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
            
            <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-8">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Book Store</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow text-right">
                        <a href="/login" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 ">
                            Login
                        </a>
                        <a href="/reg" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
                            Signup
                        </a>
                    </div>
                </div>
            </nav>

            
            <div className="h-screen flex flex-col justify-center items-center text-center bg-cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', marginBottom: '87px', marginTop:'-32px' }}>
                <h1 className="text-5xl text-white font-bold mt-8">Book Store</h1>
            </div>

            
            <div className="bg-gray-200 py-12 px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">"The more that you read, the more things you will know. The more that you learn, the more places you'll go." - Dr. Seuss</h2>
                
            </div>

            
            <footer className="bg-gray-800 text-white text-center py-4">
                <p>© 2024 Book Store</p>
            </footer>
        </div>
    );
}

export default Home;
