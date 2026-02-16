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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Users</h1>

        <div className="grid gap-4">
          {users.map((user) => (
            <div key={user.id} className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
              <p className="text-gray-600 mt-2">{user.email}</p>
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
