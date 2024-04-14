import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text,color, link }) => {
  return (
    <Link to={link}>
      <button className={`btn-${color} text-white font-bold p-4 text-lg rounded hover:shadow-lg transition-all ease-in-out duration-500 `}>{text}</button>
    </Link>
  );
};

export default Button;
