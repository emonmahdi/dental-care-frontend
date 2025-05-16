import React, { useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Rahim Uddin", isAdmin: false },
    { id: 2, name: "Karim Ali", isAdmin: true },
    { id: 3, name: "Salma Akter", isAdmin: false },
    { id: 4, name: "Nadia Hasan", isAdmin: false },
  ]);

  const makeAdmin = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, isAdmin: true } : user
    );
    setUsers(updatedUsers);
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-50 shadow-sm rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        All Users
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left divide-y divide-gray-100">
          <thead className="text-gray-600">
            <tr>
              <th className="py-3 px-4">Sl No.</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100 transition">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4 space-x-2">
                  {!user.isAdmin && (
                    <button
                      onClick={() => makeAdmin(user.id)}
                      className="bg-secondary hover:bg-primary text-white py-1 px-3 rounded-md text-xs"
                    >
                      Make Admin
                    </button>
                  )}
                  {users.find((u) => u.id === user.id) && (
                    <button
                      onClick={() => removeUser(user.id)}
                      className="bg-secondary hover:bg-primary text-white py-1 px-3 rounded-md text-xs"
                    >
                      Remove User
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-400">
                  No users available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
