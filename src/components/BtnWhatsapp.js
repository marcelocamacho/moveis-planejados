import React from 'react';
// npm install --save-dev @iconify/react @iconify/icons-mdi
import { FaWhatsapp } from 'react-icons/fa';

const BtnWhatsapp = ()=>{
	return(
		<div className='bg-white shadow rounded px-5 py-2 flex flex-col items-center mt-6 sm:flex-row mt-0'> 			
			<FaWhatsapp size={50} color="#E02041"/>
			<div className='ml-2'>
				<h3 className='font-bold text-2xl'>Orçar o seu projeto!</h3>
				<p className='text-xs'> Projeto e orçamento sem compromisso.</p>
				<p className='font-bold'> (91) 9999-9999</p>
			</div>
		</div>
	)
};
export default BtnWhatsapp;