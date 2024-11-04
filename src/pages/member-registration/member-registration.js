import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../../context/userProvider";




const MemberRegistration = () => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");
  const { setUserType } = useUser();
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [sns1, setSns1] = useState("");
  const [sns2, setSns2] = useState("");
  const [sns1Id, setSns1Id] = useState("");
  const [sns2Id, setSns2Id] = useState("");
  const [selectedRoles, setSelectedRoles] = useState({});
  const [otherProductDescription, setOtherProductDescription] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [profile, setProfile] = useState(""); 

  
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  const [expandedCategory, setExpandedCategory] = useState(null);

  const snsOptions = [
    { value: "none", label: "None" },
    { value: "whatsapp", label: "Whatsapp" },
    { value: "wechat", label: "Wechat" },
    { value: "skype", label: "Skype" },
    { value: "telegram", label: "Telegram" },
    { value: "line", label: "Line" },
  ];

  const handleCheckboxChange = (id, role, isChecked, isMainCategory) => {
    setSelectedRoles((prevState) => {
      const updatedRoles = {
        ...prevState,
        [id]: {
          ...prevState[id],
          [role]: isChecked,
        },
      };

      if (isMainCategory && categoryData[id]) {
        // If it's a main category, automatically check/uncheck the subcategories
        categoryData[id].forEach((subcategory) => {
          updatedRoles[subcategory._id] = {
            ...updatedRoles[subcategory._id],
            [role]: isChecked, // Apply the same checked state to subcategories
          };
        });
      }

      return updatedRoles;
    });
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }
      const data = await response.json();
      // Sort countries by name
      const sortedCountries = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(sortedCountries);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchData = async () => {
    try {
      // Fetch categories with their nested subcategories
      const response = await fetch(
        "https://realcommoditytradingbackend.vercel.app/categories"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setCategories(data); // Assuming data includes categories and their subcategories

      console.log("Categories with nested subcategories:", data);

      // You can organize the data into an object if necessary
      const dataObject = {};
      data.forEach((category) => {
        dataObject[category._id] = category.subcategories || []; // Store subcategories
      });

      setCategoryData(dataObject);
      console.log("Organized category data:", dataObject);
    } catch (error) {
      console.error("Error:", error);
      // Handle error, show error message, or retry logic
    }
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  useEffect(() => {
    // fetchUser();
    fetchData();
    fetchCountries();
    // window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for required fields
    if (!companyName || !mobileNumber || !telephoneNumber || !country || !city || !companyDescription) {
        toast.error("Please fill out all required fields.");
        return;
    }

    // Create a FormData object and append fields to it
    const formData = new FormData();
    formData.append("user_id", userId);
    formData.append("company_name", companyName.trim());
    formData.append("company_website", companyWebsite ? companyWebsite.trim() : '');
    formData.append("phone_number", mobileNumber);
    formData.append("tel", telephoneNumber);
    formData.append("country", country);
    formData.append("city", city.trim());
    formData.append("sns1", sns1);
    formData.append("sns2", sns2);
    formData.append("sns1_id", sns1Id.trim());
    formData.append("sns2_id", sns2Id.trim());
    formData.append("selected_roles", JSON.stringify(selectedRoles)); // Convert object to string
    formData.append("other_product_desc", otherProductDescription.trim());
    formData.append("company_desc", companyDescription.trim());

    // Append the profile file if it exists
    if (profile) {
        formData.append("company_profile", profile);
    }

    // Send the formData to the backend (POST request)
    try {
        const response = await fetch('http://localhost:9001/member_registrations', {
            method: 'POST',
            body: formData, // Send FormData directly
        });

        if (response.ok) {
            // If the registration was successful, update the user type
            const updateUserTypeResponse = await fetch(`http://localhost:9001/users/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_type: 'member' }),
            });

            if (updateUserTypeResponse.ok) {
                // Update sessionStorage
                sessionStorage.setItem('user_type', 'member');
                setUserType('member');

                toast.success('You are now our member.');
                navigate('/');
            } else {
                toast.error('Error updating user type: ' + updateUserTypeResponse.statusText);
            }
        } else {
            toast.error('Error: ' + response.statusText);
        }
    } catch (error) {
        toast.error('Error Finding Route: ' + error.message);
        console.error('Error:', error);
    }
};

  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:p-10 md:p-10 py-10 px-3 shadow-2xl border-2 my-10 w-6/6 md:w-5/6 lg:w-4/6 flex flex-col items-center gap-10">
        <div>
          <h1 className="text-center text-4xl font-bold mb-3">
            Member Register
          </h1>
        </div>
        <div>
          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                className="border"
                placeholder="Enter Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
              <label htmlFor="companyWebsite">Company Website</label>
              <input
                type="text"
                id="companyWebsite"
                className="border"
                placeholder="Enter Company Website"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
              />
              <label htmlFor="mobileNumber">Mobile Number</label>
              <PhoneInput
                country={"us"}
                value={mobileNumber}
                onChange={(phone) => setMobileNumber(phone)}
                required
              />
              <label htmlFor="telephoneNumber">Telephone Number</label>
              <input
                type="tel"
                id="telephoneNumber"
                className="border"
                placeholder="Enter Telephone Number"
                value={telephoneNumber}
                onChange={(e) => setTelephoneNumber(e.target.value)}
                required
              />
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="">Select Country</option>
                {countries.map((countryItem) => (
                  <option
                    key={countryItem.cca3}
                    value={countryItem.name.common}
                  >
                    {countryItem.name.common}
                  </option>
                ))}
              </select>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                className="border"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />

              <label htmlFor="sns1">SNS1</label>
              <select
                name="sns1"
                id="sns1"
                value={sns1}
                onChange={(e) => setSns1(e.target.value)}
              >
                {snsOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.value === sns2}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <label htmlFor="sns2">SNS2</label>
              <select
                name="sns2"
                id="sns2"
                value={sns2}
                onChange={(e) => setSns2(e.target.value)}
              >
                {snsOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.value === sns1}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <label htmlFor="sns1Id">SNS 1 :</label>
              <input
                type="text"
                id="sns1Id"
                className="border"
                placeholder="Enter Your ID"
                value={sns1Id}
                onChange={(e) => setSns1Id(e.target.value)}
              />
              <label htmlFor="sns2Id">SNS 2 :</label>
              <input
                type="text"
                id="sns2Id"
                className="border"
                placeholder="Enter Your ID"
                value={sns2Id}
                onChange={(e) => setSns2Id(e.target.value)}
              />
            </div>

            <div>
              <h2>Please select all of your trade roles below:</h2>
              <p>Click ⮟ to open product list</p>
              {categories.map((category) => (
                <React.Fragment key={category._id}>
                  <div
                    className="flex gap-2"
                    onClick={() => toggleCategory(category._id)}
                  >
                    <p className="cursor-pointer font-bold text-yellow-500">
                      {category.name}
                    </p>
                    <FaCaretDown className="mt-1 cursor-pointer" />
                  </div>
                  <div className="flex gap-4">
                    {[
                      "seller",
                      "buyer",
                      "financier",
                      "seller_mandate",
                      "buyer_mandate",
                      "financier_mandate",
                    ].map((role) => (
                      <div key={`${category._id}_${role}`}>
                        <input
                          type="checkbox"
                          name={`category_${category._id}_${role}`}
                          id={`category_${category._id}_${role}`}
                          checked={selectedRoles[category._id]?.[role] || false}
                          onChange={(e) =>
                            handleCheckboxChange(
                              category._id,
                              role,
                              e.target.checked,
                              true // This is the main category checkbox
                            )
                          }
                        />
                        <label htmlFor={`category_${category._id}_${role}`}>
                          {role
                            .replace("_", " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </label>
                      </div>
                    ))}
                  </div>

                  {expandedCategory === category._id && (
                    <>
                      {categoryData[category._id]?.map((item) => (
                        <div key={item._id}>
                          <p className="font-bold">{item.name}</p>
                          <div className="flex gap-4">
                            {[
                              "seller",
                              "buyer",
                              "financier",
                              "seller_mandate",
                              "buyer_mandate",
                              "financier_mandate",
                            ].map((role) => (
                              <div key={`${item._id}_${role}`}>
                                <input
                                  type="checkbox"
                                  name={`item_${item._id}_${role}`}
                                  id={`item_${item._id}_${role}`}
                                  checked={
                                    selectedRoles[item._id]?.[role] || false
                                  }
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      item._id,
                                      role,
                                      e.target.checked,
                                      false
                                    )
                                  }
                                />
                                <label htmlFor={`item_${item._id}_${role}`}>
                                  {role
                                    .replace("_", " ")
                                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </React.Fragment>
              ))}
              <div className="flex flex-col">
                <label htmlFor="other_description">
                  Other Product(s) Description
                </label>
                <input
                  type="text"
                  name="other_description"
                  id="other_description"
                  className="border"
                  placeholder="Please list all the other product(s)"
                  value={otherProductDescription}
                onChange={(e) => setOtherProductDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="companyDescription">
                Company Description
              </label>
              <textarea
                name="companyDescription"
                id="companyDescription"
                placeholder="Please describe your company and project within 150 words"
                className="border"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              />

              <label htmlFor="profile">
                Upload Company Profile (Optional):
              </label>
              <input
                type="file"
                id="profile"
                className="border"
                onChange={(e) => setProfile(e.target.files[0])}
              />
            </div>

            <button
              type="submit"
              className="px-5 py-4 w-full text-white bg-lime-500 rounded-md font-semibold hover:bg-lime-600 transition ease-in-out duration-300 hover:drop-shadow-xl"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MemberRegistration;
