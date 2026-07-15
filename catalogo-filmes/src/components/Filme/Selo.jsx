import React from 'react';

export default function Selo({lancamento}) {
 
  return ( 
    <>
    {lancamento && <span className="filme-selo">Lançamento</span>} 
    </> 
    );  
  }  