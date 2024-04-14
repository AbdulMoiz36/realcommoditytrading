import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text,color, link }) => {
  return (
    <Link to={link}>
      <button className={`btn-${color} text-white font-bold px-2 py-2 md:py-2 md:px-3 rounded hover:shadow-lg transition-all ease-in-out duration-500 `}>{text}</button>
    </Link>
  );
};

export default Button;
