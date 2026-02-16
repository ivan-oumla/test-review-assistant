"use client";

import { useState, useEffect } from "react";
import { fetchUsers, User } from "@/lib/api";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl">Loading...</p>
    </div>;
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Users Directory</h1>
        <p className="text-gray-600 mb-8">Browse our community members</p>

        <div className="grid gap-4">
          {users.map((user) => (
            <div key={user.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
              <p className="text-gray-600 mt-2">{user.email}</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">User ID: {user.id}</span>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          ← Back to Home
        </a>
      </main>
    </div>
  );
}
