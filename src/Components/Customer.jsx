import React, { useEffect , useState } from 'react';
import axios from 'axios';

const Customer = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:4000/customer')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-sm table-striped">
          <thead className="bg-dark text-white">
            <tr>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Bookname</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Cost</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => 
            (
              <tr key={user._id}>
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.bookname}</td>
                <td className="border px-4 py-2">{user.author}</td>
                <td className="border px-4 py-2">{user.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;
