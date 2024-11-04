import React, { useEffect, useState } from "react";

const Createpost = () => {
  const userId = sessionStorage.getItem("userId");
  const [offerStatus, setOfferStatus] = useState("");
  const [title, setTitle] = useState("");
  const [origin, setOrigin] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [contract, setContract] = useState("");
  const [discharging, setDischarging] = useState("");
  const [dischargingCity, setDischargingCity] = useState("");
  const [dischargingCountry, setDischargingCountry] = useState("");
  const [loading, setLoading] = useState("");
  const [loadingCity, setLoadingCity] = useState("");
  const [loadingCountry, setLoadingCountry] = useState("");
  const [payment, setPayment] = useState("");
  const [performance, setPerformance] = useState("");
  const [inspections, setInspections] = useState([]);
  const [otherInspection, setOtherInspection] = useState("");
  const [incoterms, setIncoterms] = useState([]);
  const [otherIncoterms, setOtherIncoterms] = useState("");
  const [price, setPrice] = useState("");
  const [commission, setCommission] = useState("");
  const [total, setTotal] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  


  const handleInspectionChange = (e) => {
    const { value, checked } = e.target;
    let updatedInspections;
  
    if (checked) {
      updatedInspections = [...inspections, value];
    } else {
      updatedInspections = inspections.filter(
        (inspection) => inspection !== value
      );
    }
  
    setInspections(updatedInspections);
  };
  const handleIncotermChange = (e) => {
    const { value, checked } = e.target;
    let updatedIncoterm;
  
    if (checked) {
      updatedIncoterm = [...incoterms, value];
    } else {
      updatedIncoterm = incoterms.filter(
        (incoterm) => incoterm !== value
      );
    }
  
    setIncoterms(updatedIncoterm);
    console.log(updatedIncoterm); // Logs the correct updated state
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:p-10 md:p-10 py-10 px-3 shadow-2xl border-2 my-10 w-6/6 md:w-5/6 lg:w-4/6 flex flex-col items-center gap-10">
        <div>
          <h1 className="text-center text-4xl font-bold mb-3">
            Create Post Offer
          </h1>
        </div>
        <div>
          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <label htmlFor="offerStatus">
                Offer Status Selection{" "}
                <span className="text-red-600 font-bold">*</span>
              </label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="buy"
                    name="offerStatus"
                    value="buy"
                    checked={offerStatus === "buy"}
                    onChange={(e) => setOfferStatus(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-blue-600">Buy</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    id="sell"
                    name="offerStatus"
                    value="sell"
                    checked={offerStatus === "sell"}
                    onChange={(e) => setOfferStatus(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-red-600">Sell</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    id="finance"
                    name="offerStatus"
                    value="finance"
                    checked={offerStatus === "finance"}
                    onChange={(e) => setOfferStatus(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-green-600">Finance</span>
                </label>
              </div>

              <label htmlFor="title">
                Title <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="title"
                className="border"
                placeholder="Title Can't be edited after submission"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="origin">
                Origin <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="origin"
                className="border"
                placeholder="Origin"
                value={origin}
                required
                onChange={(e) => setOrigin(e.target.value)}
              />
              <label htmlFor="type">
                Type/Grade/Specification{" "}
                <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="type"
                className="border"
                placeholder="Type/Grade/Specification"
                value={type}
                required
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {/* {Categories.map((countryItem) => (
                  <option
                    key={countryItem.cca3}
                    value={countryItem.name.common}
                  >
                    {countryItem.name.common}
                  </option>
                ))} */}
              </select>
              <label htmlFor="sub-category">Sub Category</label>
              <select
                name="sub-category"
                id="sub-category"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option value="">Select Category First</option>
                {/* {Categories.map((countryItem) => (
                  <option
                    key={countryItem.cca3}
                    value={countryItem.name.common}
                  >
                    {countryItem.name.common}
                  </option>
                ))} */}
              </select>
              <label htmlFor="quantity">
                Quantity<span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="quantity"
                className="border"
                placeholder="Ex: Min 30,000MT, Max 2Mbbls"
                value={quantity}
                required
                onChange={(e) => setQuantity(e.target.value)}
              />
              <label htmlFor="contract">
                Contract<span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="type"
                className="border"
                placeholder="Ex: SPOT, Annual, Trial+Annual"
                value={contract}
                required
                onChange={(e) => setContract(e.target.value)}
              />
              <label htmlFor="discharging">
                Discharging Port(s)
                <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="discharging"
                className="border"
                placeholder="Port(s) Name"
                value={discharging}
                required
                onChange={(e) => setDischarging(e.target.value)}
              />
              <label htmlFor="discharging_city">City (Discharge)</label>
              <input
                type="text"
                id="discharging_city"
                className="border"
                placeholder="Discharging City"
                value={dischargingCity}
                onChange={(e) => setDischargingCity(e.target.value)}
              />
              <label htmlFor="discharging_country">
                Country (Discharge){" "}
                <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="discharging_country"
                className="border"
                placeholder="Discharging Country"
                value={dischargingCountry}
                required
                onChange={(e) => setDischargingCountry(e.target.value)}
              />
              <label htmlFor="loading">
                Loading Port(s)<span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="loading"
                className="border"
                placeholder="Port(s) Name"
                value={loading}
                required
                onChange={(e) => setLoading(e.target.value)}
              />
              <label htmlFor="loading_city">City (Loading)</label>
              <input
                type="text"
                id="loading_city"
                className="border"
                placeholder="Loading City"
                value={loadingCity}
                onChange={(e) => setLoadingCity(e.target.value)}
              />
              <label htmlFor="loading_country">
                Country (Loading){" "}
                <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="loading_country"
                className="border"
                placeholder="Loading Country"
                value={loadingCountry}
                required
                onChange={(e) => setLoadingCountry(e.target.value)}
              />
              <label htmlFor="payment">
                Payments <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="payment"
                className="border"
                placeholder="EX: MT760 at sight, Transferable MT700, Revolving DLC"
                value={payment}
                required
                onChange={(e) => setPayment(e.target.value)}
              />
              <label htmlFor="performance">
                Performance Bond{" "}
                <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="performance"
                className="border"
                placeholder="EX: 2%"
                value={performance}
                required
                onChange={(e) => setPerformance(e.target.value)}
              />
              <label htmlFor="inpspection">inspection</label>
              <div id="inspection" className="mt-2">
                <label>
                  <input
                    type="checkbox"
                    value="SGS"
                    onChange={(e) => handleInspectionChange(e)}
                  />
                  SGS
                </label>
                <label className="ml-4">
                  <input
                    type="checkbox"
                    value="CIQ"
                    onChange={(e) => handleInspectionChange(e)}
                  />
                  CIQ
                </label>
              </div>

              <div className="mt-2">
                <label htmlFor="describeOther">Describe Other</label>
                <input
                  type="text"
                  id="describeOther"
                  className="border ml-2"
                  placeholder="Describe other"
                  value={otherInspection}
                  onChange={(e) => setOtherInspection(e.target.value)}
                />
              </div>
              <label htmlFor="incoterms">Incoterms</label>
              <div id="incoterms" className="mt-2">
                <label>
                  <input
                    type="checkbox"
                    value="FOB"
                    onChange={(e) => handleIncotermChange(e)}
                  />
                  SGS
                </label>
                <label className="ml-4">
                  <input
                    type="checkbox"
                    value="CIF"
                    onChange={(e) => handleIncotermChange(e)}
                  />
                  CIQ
                </label>
              </div>

              <div className="mt-2">
                <label htmlFor="describeOther">Describe Other</label>
                <input
                  type="text"
                  id="describeOther"
                  className="border ml-2"
                  placeholder="Describe other"
                  value={otherIncoterms}
                  onChange={(e) => setOtherIncoterms(e.target.value)}
                />
              </div>
              <label htmlFor="price">
                Pice
              </label>
              <input
                type="text"
                id="price"
                className="border"
                placeholder="EX: Gross USD 300 Per MT,Net USD per"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label htmlFor="commission">
                Commission Paid By
              </label>
              <input
                type="text"
                id="commission"
                className="border"
                placeholder="EX: Seller, Buyer, Seller & Buyer"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
              />
              <label htmlFor="total">
                Total of
              </label>
              <input
                type="text"
                id="total"
                className="border"
                placeholder="EX: USD 10"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />
              <label htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                className="border"
                placeholder="Describe your offer in detail with your company name,contact,email,product name(s)."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="file">
                Upload File
              </label>
              <input
                type="file"
                id="file"
                className="border"
                onChange={(e) => setFile(e.target.files[0])}
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

export default Createpost;
