import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const MemberRegistration = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyRegistrationCopy, setCompanyRegistrationCopy] = useState(null);
  const [passportCopy, setPassportCopy] = useState(null);
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
  const [resume, setResume] = useState(null);
  const [profile, setProfile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:p-10 md:p-10 py-10 px-3 shadow-2xl border-2 my-10 w-6/6 md:w-5/6 lg:w-4/6 flex flex-col items-center gap-10">
        <div>
          <h1 className="text-center text-4xl font-bold mb-3">Partner Register</h1>
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
                <option value="1">Country 1</option>
                <option value="2">Country 2</option>
                <option value="3">Country 3</option>
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
                value={sns1Id}
                onChange={(e) => setSns1(e.target.value)}
              >
                <option value="">Select SNS1</option>
                <option value="1">SNS1 Option 1</option>
                <option value="2">SNS1 Option 2</option>
                <option value="3">SNS1 Option 3</option>
              </select>
              <label htmlFor="sns2">SNS2</label>
              <select
                name="sns2"
                id="sns2"
                value={sns2Id}
                onChange={(e) => setSns2(e.target.value)}
              >
                <option value="">Select SNS2</option>
                <option value="1">SNS2 Option 1</option>
                <option value="2">SNS2 Option 2</option>
                <option value="3">SNS2 Option 3</option>
              </select>
              <label htmlFor="sns1Id">SNS 1 : ****</label>
              <input
                type="text"
                id="sns1Id"
                className="border"
                placeholder="Enter Your ID"
                value={sns1}
                onChange={(e) => setSns1Id(e.target.value)}
              />
              <label htmlFor="sns2Id">SNS 2 : ****</label>
              <input
                type="text"
                id="sns2Id"
                className="border"
                placeholder="Enter Your ID"
                value={sns2}
                onChange={(e) => setSns2Id(e.target.value)}
              />
            </div>

            <div>
              <h2>Please select all of your trade roles below:</h2>
              <p>Click ⮟ to open product list</p>
            </div>

            <div className="flex flex-col gap-5">
              <h2>Please select all partner participation activities below</h2>
              <div>
                <label htmlFor="consultAccept">
                  Find and/or Consult with local sellers, buyers, financiers *
                </label>
                <input
                  type="radio"
                  id="consultAccept"
                  name="consult"
                  value="accept"
                />
                <input
                  type="radio"
                  id="consultDecline"
                  name="consult"
                  value="decline"
                />
              </div>
              <div>
                <label htmlFor="inspectionAccept">
                  Working with Inspection Agency at the Port *
                </label>
                <input
                  type="radio"
                  id="inspectionAccept"
                  name="inspection"
                  value="accept"
                />
                <input
                  type="radio"
                  id="inspectionDecline"
                  name="inspection"
                  value="decline"
                />
              </div>
              <div>
                <label htmlFor="shippingAccept">
                  Working with Shipping Agency for the Export, Import Process *
                </label>
                <input
                  type="radio"
                  id="shippingAccept"
                  name="shipping"
                  value="accept"
                />
                <input
                  type="radio"
                  id="shippingDecline"
                  name="shipping"
                  value="decline"
                />
              </div>
              <div>
                <label htmlFor="newsAccept">
                  Upload the News and Rank the member’s postings on our website
                  *
                </label>
                <input
                  type="radio"
                  id="newsAccept"
                  name="news"
                  value="accept"
                />
                <input
                  type="radio"
                  id="newsDecline"
                  name="news"
                  value="decline"
                />
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
              <label htmlFor="correspondentBicCode">
                 BIC/SWIFT Code
              </label>
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
