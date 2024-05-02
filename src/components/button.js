import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text,color, link }) => {
  return (
    <Link to={link}>
      <button className={`btn-${color} text-white font-semibold py-3 px-7 text-md rounded-lg hover:shadow-lg transition-all ease-in-out duration-500 `}>{text}</button>
    </Link>
  );
};

export default Button;
