import React from 'react';
import axios from 'axios';

function App() {
  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/delete', {
        params: {
          id: '123',
          name: 'JohnDoe',
          age: '30',
        },
      });

      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Send DELETE Request</button>
    </div>
  );
}

export default App;
