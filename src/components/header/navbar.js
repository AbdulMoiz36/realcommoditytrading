import React, { useEffect, useState } from "react";
import { IoMdMenu, IoIosClose, IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://realcommoditytradingbackend.vercel.app/categories/parent/0"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const limitedData = data.slice(0,5);
        setCategories(limitedData);

        // Fetch data for each category
        const dataPromises = data.map(async (category) => {
          const response = await fetch(
            `https://realcommoditytradingbackend.vercel.app/categories/parent/${category.id}`
          );
          if (!response.ok) {
            throw new Error(
              `Failed to fetch data for category ${category._id}`
            );
          }
          const categoryData = await response.json();
          return { categoryId: category._id, data: categoryData };
        });

        // Wait for all data to be fetched
        const resolvedData = await Promise.all(dataPromises);

        // Organize fetched data into an object
        const dataObject = {};
        resolvedData.forEach(({ categoryId, data }) => {
          dataObject[categoryId] = data;
        });
        setCategoryData(dataObject);
      } catch (error) {
        console.error("Error:", error);
        // Handle error, show error message or retry logic
      }
    };

    fetchData();
  }, []);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between lg:justify-center items-center gap-5 w-full mx-auto p-2 px-10 md:px-32 lg:px-16 bg-white drop-shadow-xl">
      <div>
        <NavLink to='/'>
        <img
          src={logo}
          alt="Logo"
          className="w-56"
        />
        </NavLink>
      </div>

      <div
        className={`nav-links lg:static  lg:min-h-fit absolute shadow shadow-black lg:shadow-transparent bg-white flex flex-col  gap-5 min-h-screen ${
          isOpen
            ? "left-0 transition-all duration-300"
            : "left-[-100%] transition-all duration-300"
        } top-0 lg:w-auto md:w-[50%] w-[75%] flex items-start`}
      >
        <div className="bg-green-700 p-8 flex items-center justify-center w-full lg:hidden">
          <img
            src="https://realcommoditytrading.com/frontend/new_assets/img/logo.svg"
            alt="Logo"
            className="w-auto h-auto"
          />
          <IoIosClose
            onClick={toggleIcon}
            className="text-3xl cursor-pointer lg:hidden absolute top-0 right-0 text-white"
          />
        </div>
        <ul className="navigation-list px-10 flex lg:flex-row flex-col lg:items-center gap-5 lg:gap-[1vw] ">
          <li>
            <NavLink
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw]"
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw]"
              to={"/about"}
            >
              About Us
            </NavLink>
          </li>
          {categories.map((category) => (
            <li key={category._id}>
              <p className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1">
              {category.name}
              <IoMdArrowDropdown />
              </p>
            <ul>
            {categoryData[category._id]?.map((item) => (
              <li key={item._id}>
                <NavLink to={`/product-offers/${item.id}`}>
                  <p>{item.name}</p>
                </NavLink>
              </li>
            ))}
               
            </ul>
          </li>
          ))}
          
         
          <li>
            <NavLink
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              Q&A
              <IoMdArrowDropdown />
            </NavLink>
            <ul>
              <li>
                <NavLink href="#">
                  <p>PETROLEUM</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>METAL</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>AGRI/MEAT</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>FINANCE</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Others</p>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              Inquiry
              <IoMdArrowDropdown />
            </NavLink>
            <ul>
              <li>
                <NavLink href="#">
                  <p>Verified Offers</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Website Issues</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Partner Program</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Others</p>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-6 lg:hidden">
        {isOpen ? (
          <IoIosClose
            onClick={toggleIcon}
            className="text-3xl cursor-pointer lg:hidden"
          />
        ) : (
          <IoMdMenu
            onClick={toggleIcon}
            className="text-3xl cursor-pointer lg:hidden"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
