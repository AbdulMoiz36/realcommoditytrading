import React, { useEffect, useState } from "react";
import { useUser } from "../../context/userProvider";

const Createpost = () => {
  const userId = sessionStorage.getItem("userId");
  const offer_type = "1";
  const [offerStatus, setOfferStatus] = useState("");
  const [title, setTitle] = useState("");
  const [origin, setOrigin] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
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
  // Find the selected category and extract subcategories
  const selectedCategory = categories.find((cat) => cat.name === category);
  const subCategories = selectedCategory ? selectedCategory.subcategories : [];

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
      updatedIncoterm = incoterms.filter((incoterm) => incoterm !== value);
    }

    setIncoterms(updatedIncoterm);
    console.log(updatedIncoterm); // Logs the correct updated state
  };

  useEffect(() => {
    // Fetch categories from the backend
    fetch("http://localhost:9001/categories/")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const form = e.target; // Reference to the form element
  
    const formData = new FormData();
    formData.append("user_id", userId);
    formData.append("offer_type", offer_type);
    formData.append("offer_status", offerStatus);
    formData.append("post_title", title);
    formData.append("goods_market_name", origin);
    formData.append("type_specification", type);
    formData.append("category_id", category);
    formData.append("subcat_id", subCategory);
    formData.append("quantity_min_and_max", quantity);
    formData.append("duration_of_contract", contract);
    formData.append("discharging_port_name", discharging);
    formData.append("discharging_port_city", dischargingCity);
    formData.append("discharging_port_country", dischargingCountry);
    formData.append("loading_port_name", loading);
    formData.append("loading_port_city", loadingCity);
    formData.append("loading_port_country", loadingCountry);
    formData.append("loading_port_payment", payment);
    formData.append("performance_bond", performance);
    formData.append("inspection", inspections);
    formData.append("inspection_describe_other", otherInspection);
    formData.append("incoterm_describe_other", otherIncoterms);
    formData.append("price", price);
    formData.append("seller_agent_fees", commission);
    formData.append("total_of", total);
    formData.append("description", description);
  
    // Add file if it exists
    if (file) {
      formData.append("file_name", file);
    }
  
    fetch("http://localhost:9001/post", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post created successfully:", data);
  
        // Clear the form values
        form.reset(); // Clear all input fields in the form
  
        // Reset local state variables if used
        setOfferStatus("");
        setTitle("");
        setOrigin("");
        setType("");
        setCategory("");
        setSubCategory("");
        setQuantity("");
        setContract("");
        setDischarging("");
        setDischargingCity("");
        setDischargingCountry("");
        setLoading("");
        setLoadingCity("");
        setLoadingCountry("");
        setPayment("");
        setPerformance("");
        setInspections("");
        setOtherInspection("");
        setOtherIncoterms("");
        setPrice("");
        setCommission("");
        setTotal("");
        setDescription("");
        setFile(null);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };
  

  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:p-10 md:p-10 py-10 px-3 shadow-2xl border-2 my-10 w-6/6 md:w-5/6 lg:w-4/6 flex flex-col items-center gap-10">
        <div>
          <h1 className="text-center text-4xl font-bold mb-3">
            Create Post Offer
          </h1>
        </div>
        <div className="flex">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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

            
              <div className="flex flex-col  gap-4">
              <label htmlFor="title">
                Title <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="title"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="Title Can't be edited after submission"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
                />
                </div>

                <div className="flex-1 gap-4">
              <label htmlFor="origin">
                Origin <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="origin"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="Origin"
                value={origin}
                required
                onChange={(e) => setOrigin(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="type">
                Type/Grade/Specification{" "}
                <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="type"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="Type/Grade/Specification"
                value={type}
                required
                onChange={(e) => setType(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
                className="px-3 py-2.5 border border-green-500 outline-yellow-500 rounded-md w-full"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setSubCategory(""); // Reset subcategory when a new category is selected
                }}
              >
                <option value="">Select Category</option>
                {categories.map((categoryItem) => (
                  <option key={categoryItem._id} value={categoryItem.name}>
                    {categoryItem.name}
                  </option>
                ))}
              </select>
              </div>

              <div className="flex-1 gap-4">
              <label htmlFor="sub-category">Sub Category</label>
              <select
                name="sub-category"
                id="sub-category"
                className="px-3 py-2.5 border border-green-500 outline-yellow-500 rounded-md w-full"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                disabled={!category} // Disable the subcategory dropdown if no category is selected
              >
                <option value="">Select Subcategory</option>
                {subCategories.map((subCategoryItem) => (
                  <option
                    key={subCategoryItem._id}
                    value={subCategoryItem.name}
                  >
                    {subCategoryItem.name}
                  </option>
                ))}
              </select>
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="quantity">
                Quantity<span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="quantity"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="Ex: Min 30,000MT, Max 2Mbbls"
                value={quantity}
                required
                onChange={(e) => setQuantity(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="contract">
                Contract<span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="type"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="Ex: SPOT, Annual, Trial+Annual"
                value={contract}
                required
                onChange={(e) => setContract(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="discharging">
                Discharging Port(s)
                <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="discharging"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="Port(s) Name"
                value={discharging}
                required
                onChange={(e) => setDischarging(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="discharging_city">City (Discharge)</label>
              <input
                type="text"
                id="discharging_city"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="Discharging City"
                value={dischargingCity}
                onChange={(e) => setDischargingCity(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="discharging_country">
                Country (Discharge){" "}
                <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="discharging_country"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="Discharging Country"
                value={dischargingCountry}
                required
                onChange={(e) => setDischargingCountry(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="loading">
                Loading Port(s)<span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="loading"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="Port(s) Name"
                value={loading}
                required
                onChange={(e) => setLoading(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="loading_city">City (Loading)</label>
              <input
                type="text"
                id="loading_city"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="Loading City"
                value={loadingCity}
                onChange={(e) => setLoadingCity(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="loading_country">
                Country (Loading){" "}
                <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="loading_country"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="Loading Country"
                value={loadingCountry}
                required
                onChange={(e) => setLoadingCountry(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="payment">
                Payments <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="payment"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="EX: MT760 at sight, Transferable MT700, Revolving DLC"
                value={payment}
                required
                onChange={(e) => setPayment(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="performance">
                Performance Bond{" "}
                <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                id="performance"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="EX: 2%"
                value={performance}
                required
                onChange={(e) => setPerformance(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
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
              </div>

              <div className="flex-1 gap-4 mt-2">
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
              <div className="flex-1 gap-4">
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
              </div>

              <div className="flex-1 gap-4 mt-2">
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
              <div className="flex-1 gap-4">
              <label htmlFor="price">Pice</label>
              <input
                type="text"
                id="price"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="EX: Gross USD 300 Per MT,Net USD per"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="commission">Commission Paid By</label>
              <input
                type="text"
                id="commission"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="EX: Seller, Buyer, Seller & Buyer"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="total">Total of</label>
              <input
                type="text"
                id="total"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="EX: USD 10"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                placeholder="Describe your offer in detail with your company name,contact,email,product name(s)."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              </div>
              <div className="flex-1 gap-4">
              <label htmlFor="file">Upload File</label>
              <input
                type="file"
                id="file"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
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
