import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCaretDown } from "react-icons/fa";
import { useUser } from "../../context/userProvider";
const MemberRegistration = () => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [companyRegistrationCopy, setCompanyRegistrationCopy] = useState("");
  const [passportCopy, setPassportCopy] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [sns1, setSns1] = useState("");
  const [sns2, setSns2] = useState("");
  const [sns1Id, setSns1Id] = useState("");
  const [sns2Id, setSns2Id] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAddress, setBankAddress] = useState("");
  const [swissCode, setSwissCode] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankTelephoneNumber, setBankTelephoneNumber] = useState("");
  const [bankFaxNumber, setBankFaxNumber] = useState("");
  const [bankOfficerName, setBankOfficerName] = useState("");
  const [bankOfficerEmail, setBankOfficerEmail] = useState("");
  const [bankWebsite, setBankWebsite] = useState("");
  const [correspondentBankName, setCorrespondentBankName] = useState("");
  const [bicCode, setBicCode] = useState("");
  const [otherSuggestions, setOtherSuggestions] = useState("");
  const [resume, setResume] = useState("");
  const [profile, setProfile] = useState("");

  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedRoles, setSelectedRoles] = useState({});

  const [countries, setCountries] = useState([]);

  const { setUserType } = useUser();


  const snsOptions = [
    { value: "none", label: "None" },
    { value: "whatsapp", label: "Whatsapp" },
    { value: "wechat", label: "Wechat" },
    { value: "skype", label: "Skype" },
    { value: "telegram", label: "Telegram" },
    { value: "line", label: "Line" },
  ];

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

  const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:9001/users/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      
      setfirstName(data.first_name);
      setlastName(data.last_name);
      
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
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
  useEffect(() => {
    
    fetchUser();
    fetchData();
    fetchCountries();
    // window.scrollTo(0, 0);
  }, []);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Create a FormData object to hold all the form data, including files
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('company_name', companyName);
    formData.append('company_website', companyWebsite);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('company_registration_copy', companyRegistrationCopy); // File
    formData.append('passport_copy', passportCopy); // File
    formData.append('mobile_number', mobileNumber);
    formData.append('telephone_number', telephoneNumber);
    formData.append('country', country);
    formData.append('city', city);
    formData.append('sns1', sns1);
    formData.append('sns2', sns2);
    formData.append('sns1_id', sns1Id);
    formData.append('sns2_id', sns2Id);
    formData.append('selected_roles', JSON.stringify(selectedRoles)); // Convert object to string
    formData.append('bank_name', bankName);
    formData.append('bank_address', bankAddress);
    formData.append('swiss_code', swissCode);
    formData.append('bank_account_name', bankAccountName);
    formData.append('bank_account_number', bankAccountNumber);
    formData.append('bank_telephone_number', bankTelephoneNumber);
    formData.append('bank_fax_number', bankFaxNumber);
    formData.append('bank_officer_name', bankOfficerName);
    formData.append('bank_officer_email', bankOfficerEmail);
    formData.append('bank_website', bankWebsite);
    formData.append('correspondent_bank_name', correspondentBankName);
    formData.append('bic_code', bicCode);
    formData.append('other_suggestions', otherSuggestions);
    formData.append('resume', resume); // File
    formData.append('profile', profile); // File

    // Send the formData to the backend (POST request)
    try {
      const response = await fetch('http://localhost:9001/partner_registrations', {
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
              body: JSON.stringify({ user_type: 'partner' }),
          });

          if (updateUserTypeResponse.ok) {
              // Update sessionStorage
              sessionStorage.setItem('user_type', 'partner');
              setUserType('partner');

              toast.success('You are now our Partner.');
              navigate('/');
          } else {
              toast.error('Error updating user type: ' + updateUserTypeResponse.statusText);
          }
      } else {
          toast.error('Error: ' + response.statusText);
      }
    } catch (error) {
        toast.error('Error: ' + error.message);
        console.error('Error:', error);
    }
};



  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:p-10 md:p-10 py-10 px-3 shadow-2xl border-2 my-10 w-6/6 md:w-5/6 lg:w-4/6 flex flex-col items-center gap-10">
        <div>
          <h1 className="text-center text-4xl font-bold mb-3">
            Partner Register
          </h1>
        </div>
        <div>
          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <label htmlFor="companyName">
                Company Name <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                className="border"
                placeholder="Enter Company Name"
                value={companyName}
                required
                onChange={(e) => setCompanyName(e.target.value)}
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
              <label htmlFor="firstname">
                First Name <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="firstname"
                className="border"
                placeholder="First Name"
                value={firstName}
                required
                onChange={(e) => setfirstName(e.target.value)}
              />
              <label htmlFor="lastname">
                Last Name <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="lastname"
                className="border"
                placeholder="Last Name"
                value={lastName}
                required
                onChange={(e) => setlastName(e.target.value)}
              />
              <label htmlFor="companyRegistration">
                Upload Company Registration Copy: (Optional)
              </label>
              <input
                type="file"
                id="companyRegistration"
                className="border"
                onChange={(e) => setCompanyRegistrationCopy(e.target.files[0])}
              />
              <label htmlFor="passport">
                Upload Passport (National ID) Copy: (Optional)
              </label>
              <input
                type="file"
                id="passport"
                className="border"
                onChange={(e) => setPassportCopy(e.target.files[0])}
              />
              <label htmlFor="mobileNumber">Mobile Number</label>
              <PhoneInput
                country={"us"}
                value={mobileNumber}
                onChange={(phone) => setMobileNumber(phone)}
              />
              <label htmlFor="telephoneNumber">Telephone Number</label>
              <input
                type="tel"
                id="telephoneNumber"
                className="border"
                placeholder="Enter Telephone Number"
                value={telephoneNumber}
                onChange={(e) => setTelephoneNumber(e.target.value)}
              />
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
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
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h2>Please select all partner participation activities below</h2>
              <div className="flex flex-col gap-2">
                <label htmlFor="consultAccept">
                  Find and/or Consult with local sellers, buyers, financiers *
                </label>
                <div className="flex flex-row gap-1">
                  <input
                    type="radio"
                    id="consultAccept"
                    name="consult"
                    value="accept"
                  />
                  <span>I Accept</span>
                  <input
                    type="radio"
                    id="consultDecline"
                    name="consult"
                    value="decline"
                    className="ml-5"
                  />
                  <span>No Thanks</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="inspectionAccept">
                  Working with Inspection Agency at the Port *
                </label>
                <div className="flex flex-row gap-1">
                  <input
                    type="radio"
                    id="inspectionAccept"
                    name="inspection"
                    value="accept"
                  />
                  <span>I Accept</span>

                  <input
                    type="radio"
                    id="inspectionDecline"
                    name="inspection"
                    value="decline"
                    className="ml-5"
                  />
                  <span>No Thanks</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="shippingAccept">
                  Working with Shipping Agency for the Export, Import Process *
                </label>
                <div className="flex flex-row gap-1">
                  <input
                    type="radio"
                    id="shippingAccept"
                    name="shipping"
                    value="accept"
                  />
                  <span>I Accept</span>

                  <input
                    type="radio"
                    id="shippingDecline"
                    name="shipping"
                    value="decline"
                    className="ml-5"
                  />
                  <span>No Thanks</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="newsAccept">
                  Upload the News and Rank the member’s postings on our website
                  *
                </label>
                <div className="flex flex-row gap-1">
                  <input
                    type="radio"
                    id="newsAccept"
                    name="news"
                    value="accept"
                  />
                  <span>I Accept</span>

                  <input
                    type="radio"
                    id="newsDecline"
                    name="news"
                    value="decline"
                    className="ml-5"
                  />
                  <span>No Thanks</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <label htmlFor="otherSuggestions">
                Other suggested activities if any
              </label>
              <textarea
                name="otherSuggestions"
                id="otherSuggestions"
                placeholder="Please describe your suggestions"
                className="border"
                value={otherSuggestions}
                onChange={(e) => setOtherSuggestions(e.target.value)}
              />
              <label htmlFor="resume">
                Upload Resume or Company Profile (Optional):
              </label>
              <p>
                Your resume is required for us to review and give access level
                in our website.
              </p>
              <input
                type="file"
                id="resume"
                className="border"
                onChange={(e) => setResume(e.target.files[0])}
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

            <div className="flex flex-col gap-5">
              <h2>
                Bank Information (Optional) to receive the Service Fees for
                partner’s activities
              </h2>
              <label htmlFor="bankName">Bank Name</label>
              <input
                type="text"
                id="bankName"
                className="border"
                placeholder="Name of the bank"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
              <label htmlFor="bankAddress">Bank Address</label>
              <input
                type="text"
                id="bankAddress"
                className="border"
                placeholder="Bank address/city/country"
                value={bankAddress}
                onChange={(e) => setBankAddress(e.target.value)}
              />
              <label htmlFor="bicCode">BIC/SWIFT Code</label>
              <input
                type="text"
                id="bicCode"
                className="border"
                placeholder="BIC/SWIFT Code"
                value={bicCode}
                onChange={(e) => setBicCode(e.target.value)}
              />
              <label htmlFor="bankAccountName">Account Name</label>
              <input
                type="text"
                id="bankAccountName"
                className="border"
                placeholder="Account Name"
                value={bankAccountName}
                onChange={(e) => setBankAccountName(e.target.value)}
              />
              <label htmlFor="bankAccountNumber">Account Number</label>
              <input
                type="text"
                id="bankAccountNumber"
                className="border"
                placeholder="Account Number"
                value={bankAccountNumber}
                onChange={(e) => setBankAccountNumber(e.target.value)}
              />
              <label htmlFor="bankTelephoneNumber">Bank Telephone Number</label>
              <PhoneInput
                country={"us"}
                value={bankTelephoneNumber}
                onChange={(phone) => setBankTelephoneNumber(phone)}
              />
              <label htmlFor="bankFaxNumber">Bank Fax Number</label>
              <input
                type="text"
                id="bankFaxNumber"
                className="border"
                placeholder="Bank fax Number"
                value={bankFaxNumber}
                onChange={(e) => setBankFaxNumber(e.target.value)}
              />
              <label htmlFor="bankOfficerName">Bank Officer Name</label>
              <input
                type="text"
                id="bankOfficerName"
                className="border"
                placeholder="Bank Officer Name"
                value={bankOfficerName}
                onChange={(e) => setBankOfficerName(e.target.value)}
              />
              <label htmlFor="bankOfficerEmail">Bank Office Email</label>
              <input
                type="text"
                id="bankOfficerEmail"
                className="border"
                placeholder="Bank officer Email"
                value={bankOfficerEmail}
                onChange={(e) => setBankOfficerEmail(e.target.value)}
              />
              <label htmlFor="bankWebsite">Bank Website</label>
              <input
                type="text"
                id="bankWebsite"
                className="border"
                placeholder="Bank Website URL"
                value={bankWebsite}
                onChange={(e) => setBankWebsite(e.target.value)}
              />
              <label htmlFor="correspondentBankName">
                Correspondent Bank Name
              </label>
              <input
                type="text"
                id="correspondentBankName"
                className="border"
                placeholder="Correspondent Bank Name"
                value={correspondentBankName}
                onChange={(e) => setCorrespondentBankName(e.target.value)}
              />
              <label htmlFor="correspondentBicCode">BIC/SWIFT Code</label>
              <input
                type="text"
                id="correspondentBicCode"
                className="border"
                placeholder="Correspondent BIC/SWIFT Code"
                value={swissCode}
                onChange={(e) => setSwissCode(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="px-5 py-4 text-white bg-lime-500 rounded-md font-semibold hover:bg-lime-600 transition ease-in-out duration-300 hover:drop-shadow-xl"
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
