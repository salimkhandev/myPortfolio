import React, { useState, useEffect } from 'react';
import Loader from './components/Spinner';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading or other async operations
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Simulate a 3-second delay
    }, []);

    return (
        <div>
            
                <Loader />
           
        </div>
    );
}

export default App;
