import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'; // Import the hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar for large screens */}
      <div className={`fixed flex inset-y-0 left-0 bg-gray-800 text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <ul className="flex flex-col p-4 space-y-4">
          <li className="hover:bg-gray-700 p-2 rounded">Home</li>
          <li className="hover:bg-gray-700 p-2 rounded">About</li>
          <li className="hover:bg-gray-700 p-2 rounded">Services</li>
          <li className="hover:bg-gray-700 p-2 rounded">Contact</li>
        </ul>
      </div>

      {/* Hamburger icon for small screens */}
      <div className="md:hidden p-4 fixed top-0 left-0 z-50">
        <button onClick={toggleNavbar} className="text-white focus:outline-none">
          <AiOutlineMenu size={30} />
        </button>
      </div>

     
    </div>
  );
};

export default Navbar;
