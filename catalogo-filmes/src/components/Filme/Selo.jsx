import React from 'react';

export default function Selo({lancamento}) {
  
  if (!lancamento) return null;
  
  return (
    <span className="filme-selo">Lançamento</span>
  );
}