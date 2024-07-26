import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import axios from 'axios';


const AdminPanel = () => {
    const [documents, setDocuments] = useState([]);
    const [id, setId] = useState([]);
    const [isloading, setLoading] = useState(true);

const handleDelete = async (docID) => {
 setId(docID)
    const url = `http://localhost:3000/delete?id=${docID}`;
    await axios.delete(url);

    setDocuments(documents.filter(doc => doc._id != docID));

}
    // const path = window.location.pathname;

  
    useEffect(() => {
        fetch('https://portfolio-backend-git-main-salimkhandevs-projects.vercel.app/admin') // Ensure this URL matches your backend endpoint
            .then(response => response.json())
            .then(data => {setDocuments(data)
                setLoading(false)
            })
            .catch(error => console.error('Error fetching documents:', error));
    }, []);

    const bgColors = ['bg-blue-500', 'bg-green-500'];

    return (
        <div className="min-h-screen p-10 text-white submitted-forms bg-gray-900">
            <h1 className="text-3xl font-bold mb-6">Submitted Forms</h1>
            {
                isloading ? (<SplashScreen />):
            <ul className="space-y-4">
                
               {
                            documents.length === 0 ? (<p>No documents found.</p>):
               
               (documents.map((doc, index) => (
                    <li key={doc._id} className={`p-6 rounded-lg break-words shadow-md ${bgColors[index % bgColors.length]}`}>
                        <span className='text-gray-900 border-black border-2 rounded-full px-3 py-1'>{index + 1}</span>                        
                        <h2 className="text-2xl mt-2 font-semibold"> {doc.name}</h2>
                        <p className="text-lg "><b>Email:</b> {doc.email}</p>
                        <p className="text-lg "> <b>Message:</b> {doc.message}</p>
                       <button className='bg-red-900 hover:bg-red-500  text-white font-bold py-2 px-2 rounded' onClick={()=>{handleDelete(doc._id)}}>Delete</button>
                        
                    </li>
                )))
                
                
                
                
                }
            </ul>}

            
        </div>
    );
};

export default AdminPanel;
