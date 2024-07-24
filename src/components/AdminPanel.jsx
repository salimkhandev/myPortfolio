import { useState, useEffect } from 'react';

const AdminPanel = () => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-backend-git-main-salimkhandevs-projects.vercel.app/admin') // Ensure this URL matches your backend endpoint
            .then(response => response.json())
            .then(data => setDocuments(data))
            .catch(error => console.error('Error fetching documents:', error));
    }, []);

    const bgColors = ['bg-blue-500', 'bg-green-500'];

    return (
        <div className="min-h-screen p-10 text-white">
            <h1 className="text-3xl font-bold mb-6">Submitted Forms</h1>
            <ul className="space-y-4">
                
                {documents.map((doc, index) => (
                    <li key={doc._id} className={`p-6 rounded-lg break-words shadow-md ${bgColors[index % bgColors.length]}`}>
                        <span className='text-gray-900 border-black border-2 rounded-full px-3 py-1'>{index + 1}</span>                        
                        <h2 className="text-2xl mt-2 font-semibold"> {doc.name}</h2>
                        <p className="text-lg "><b>Email:</b> {doc.email}</p>
                        <p className="text-lg "> <b>Message:</b> {doc.message}</p>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
