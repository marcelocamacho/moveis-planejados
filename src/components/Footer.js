import React from 'react';

const Footer = ({children}) =>{
  return(
    <div className='p-4 bg-gray-200 sm:flex justify-between items-center'>
    <div>
      <h5> Lima Móveis</h5>
      <p>Rua tal, bairro y</p>
    </div>
    {children}
  </div>
  );
};
export default Footer;