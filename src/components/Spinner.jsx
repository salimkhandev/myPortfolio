import React from 'react';
import { BarLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="loader-container">
      <BarLoader color={'#36D7B7'} loading={true} />
    </div>
  );
}

export default Loader;
