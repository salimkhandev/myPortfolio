import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const MyComponent = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/admin') // Ensure this URL matches your backend endpoint
      .then(response => response.json())
      .then(data => setDocuments(data))
      .catch(error => console.error('Error fetching documents:', error));
  }, []);

  const bgColors = ['bg-blue-500', 'bg-green-500'];

  return (
    <div className="min-h-screen p-10 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Documents</h1>
      <ul className="space-y-4">
        {documents.map((doc, index) => (
          <li key={doc._id} className={`p-6 rounded-lg shadow-md ${bgColors[index % bgColors.length]}`}>
            <h2 className="text-2xl font-semibold">{index + 1} {doc.name}</h2>
            <p className="text-lg">Email: {doc.email}</p>
            <p className="text-lg">Message: {doc.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
