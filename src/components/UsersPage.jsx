import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 6;
  const navigate = useNavigate();
  const updateUserLocally = (updatedUser) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
  };
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users?per_page=12");
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
      alert("User deleted successfully.");
    } catch (error) {
      alert("Failed to delete user.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const filteredUsers = users.filter(user =>
    `${user.first_name} ${user.last_name} ${user.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-700 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-4xl font-bold text-center mb-4">Users</h1>

        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white outline-none max-w-md mx-auto block mb-6 px-4 py-2 rounded shadow"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUsers.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
            >
              <img src={user.avatar} alt={user.first_name} className="w-24 h-24 rounded-full mb-4 shadow" />
              <h2 className="text-xl font-semibold text-gray-800">{user.first_name} {user.last_name}</h2>
              <p className="text-sm text-gray-500">ID: {user.id}</p>
              <p className="text-sm text-gray-600 mt-1">{user.email}</p>
              <div className="flex space-x-2 mt-4">
                <button onClick={() => handleEdit(user.id)} className="px-3 py-1 text-sm bg-purple-600 text-white rounded hover:bg-indigo-700 cursor-pointer">Edit</button>
                <button onClick={() => handleDelete(user.id)} className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer">Delete</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10 space-x-4">
          {[1, 2].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-md cursor-pointer font-medium transition ${currentPage === page ? "bg-white text-purple-700 shadow" : "bg-purple-500 text-white hover:bg-purple-600"}`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
