import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUsers = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        const user = response.data.data;
        setFormData({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
        });
      } catch (error) {
        alert("Failed to fetch user details.");
      }
    };

    fetchUser();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://reqres.in/api/users/${id}`,
        formData
      );
      if (response.status === 200) {
        navigate("/users");
        alert("User updated successfully.");
      }
    } catch (error) {
      alert("Failed to update user.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-700 flex justify-center items-center">
      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
        <input
          type="text"
          value={formData.first_name}
          onChange={(e) =>
            setFormData({ ...formData, first_name: e.target.value })
          }
          className="w-full mb-2 p-2 border rounded"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={formData.last_name}
          onChange={(e) =>
            setFormData({ ...formData, last_name: e.target.value })
          }
          className="w-full mb-2 p-2 border rounded"
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
          placeholder="Email"
          required
        />
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => navigate("/users")}
            className="px-4 py-2 cursor-pointer bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 cursor-pointer bg-purple-600 text-white rounded hover:bg-indigo-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUsers;
