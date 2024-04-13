import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text,color, link }) => {
  return (
    <Link to={link}>
      <button className={`btn-${color} text-white font-bold py-3 px-5 rounded`}>{text}</button>
    </Link>
  );
};

export default Button;
