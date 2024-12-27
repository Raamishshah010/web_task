import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import { allCategories } from "../../apiService";

//! BASIC INFO STEP 1
const BasicInfoComponent = ({ setComponentCounter }) => {
  return (
    <div className="mt-12 shadow-lg bg-gray-100 rounded-md">
      <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragraph">
        <label className="text-sm font-semibold">Date</label>
        <input type="date" className="bg-transparent outline-none" />
      </div>

      <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragraph">
        <label className="text-sm font-semibold">Name Of Factory/Client</label>
        <input type="text" placeholder="Name" className="bg-transparent outline-none" />
      </div>

      <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragraph">
        <label className="text-sm font-semibold">Address</label>
        <input type="text" placeholder="Address" className="bg-transparent outline-none" />
      </div>

      <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragraph">
        <label className="text-sm font-semibold">Representative Name</label>
        <input type="text" placeholder="Representative Name" className="bg-transparent outline-none" />
      </div>

      <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragraph">
        <label className="text-sm font-semibold">Designation</label>
        <input type="text" placeholder="Designation" className="bg-transparent outline-none" />
      </div>

      <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragraph">
        <label className="text-sm font-semibold">Contact Email</label>
        <input type="email" placeholder="Email" className="bg-transparent outline-none" />
      </div>

      <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragraph">
        <label className="text-sm font-semibold">Contact Number</label>
        <input type="tel" placeholder="Number" className="bg-transparent outline-none" />
      </div>

      <div className="px-10 py-6 flex justify-end">
        <button
          className="bg-theme text-white text-sm px-12 py-2 rounded-md"
          onClick={() => setComponentCounter(1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

//! COMPANY DETAIL STEP 2
const CompanyDetailComponent = ({ setComponentCounter }) => {
  return (
    <div className="mt-12 shadow-lg bg-gray-100 rounded-md">
      <h1 className="text-xl font-semibold px-10 py-5">Step 2: Company Details</h1>

      <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragraph">
        <label className="text-sm font-semibold">No. Of Employees (Male/Female)</label>
        <div className="flex gap-5">
          <input type="number" placeholder="Male" className="bg-transparent outline-none" />
          <input type="number" placeholder="Female" className="bg-transparent outline-none" />
        </div>
      </div>

      <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragraph">
        <label className="text-sm font-semibold">No. Of Shifts</label>
        <input type="number" placeholder="Enter The Numbers" className="bg-transparent outline-none" />
      </div>

      <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragraph">
        <label className="text-sm font-semibold">Factory Area (sqm/sqf)</label>
        <input type="number" placeholder="Enter The Numbers" className="bg-transparent outline-none" />
      </div>

      <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragraph">
        <label className="text-sm font-semibold">Production Capacity</label>
        <input type="text" placeholder="Units" className="bg-transparent outline-none" />
      </div>

      <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragraph">
        <label className="text-sm font-semibold">Major Production Processes</label>
        <input type="text" placeholder="Processes" className="bg-transparent outline-none" />
      </div>

      <div className="px-10 py-6 flex justify-between">
        <button
          className="bg-gray-500 text-white text-sm px-12 py-2 rounded-md"
          onClick={() => setComponentCounter(0)}
        >
          Back
        </button>
        <button
          className="bg-theme text-white text-sm px-12 py-2 rounded-md"
          onClick={() => setComponentCounter(2)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

//! HIGG FEM VERIFICATION STEP 3
const HigFemVerificationComponent = ({ setComponentCounter }) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="mt-12 shadow-lg bg-gray-100 rounded-md">
      <h1 className="text-xl font-semibold px-10 py-5">Step 3: HIGG FEM Verification</h1>

      {[
        "Is it the first-time verification at your facility?",
        "Does your facility have any wet process (washing, dyeing, etc)?",
        "Does your facility have onsite ETP?",
        "Have you completed only foundation?",
        "Verification type",
      ].map((question, index) => (
        <div key={index} className="w-full px-10 py-3 flex flex-col gap-2 text-paragraph">
          <label className="text-sm font-semibold">{question}</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Yes"
                checked={selectedOption === "Yes"}
                onChange={() => setSelectedOption("Yes")}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="No"
                checked={selectedOption === "No"}
                onChange={() => setSelectedOption("No")}
              />
              No
            </label>
          </div>
        </div>
      ))}

      <div className="px-10 py-6 flex justify-between">
        <button
          className="bg-gray-500 text-white text-sm px-12 py-2 rounded-md"
          onClick={() => setComponentCounter(1)}
        >
          Back
        </button>
        <button
          className="bg-theme text-white text-sm px-12 py-2 rounded-md"
          onClick={() => setComponentCounter(3)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

//! DYNAMIC CATEGORIES STEP 4
const DynamicCategoryComponent = ({ setComponentCounter }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await allCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="mt-12 shadow-lg bg-gray-100 rounded-md">
      {categories.map((category, index) => (
        <div key={index} className="w-full px-10 py-3">
          <h1 className="text-xl font-semibold mb-4">{category.title}</h1>
          {category.subcategory.map((sub, subIndex) => (
            <div key={subIndex} className="flex items-center gap-12 mb-3">
              <label className="text-sm font-semibold">{sub.title}</label>
              <input type="checkbox" className="bg-transparent outline-none translate-y-1" />
            </div>
          ))}
        </div>
      ))}

      <div className="px-10 py-6 flex justify-between">
        <button
          className="bg-gray-500 text-white text-sm px-12 py-2 rounded-md"
          onClick={() => setComponentCounter(2)}
        >
          Back
        </button>
        <button
          className="bg-theme text-white text-sm px-12 py-2 rounded-md"
          onClick={() => setComponentCounter(4)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

//! MAIN FORM COMPONENT
const StepperForm = () => {
  const [componentCounter, setComponentCounter] = useState(0);

  const renderStepContent = () => {
    switch (componentCounter) {
      case 0:
        return <BasicInfoComponent setComponentCounter={setComponentCounter} />;
      case 1:
        return <CompanyDetailComponent setComponentCounter={setComponentCounter} />;
      case 2:
        return <HigFemVerificationComponent setComponentCounter={setComponentCounter} />;
      case 3:
        return <DynamicCategoryComponent setComponentCounter={setComponentCounter} />;
      case 4:
        return (
          <div className="mt-12 shadow-lg bg-gray-100 rounded-md">
            <h1 className="text-xl font-semibold px-10 py-5">Step 5: Confirm Details</h1>
            <p className="px-10">Review all your information before submitting.</p>
            <div className="px-10 py-6 flex justify-between">
              <button
                className="bg-gray-500 text-white text-sm px-12 py-2 rounded-md"
                onClick={() => setComponentCounter(3)}
              >
                Back
              </button>
              <button
                className="bg-green-500 text-white text-sm px-12 py-2 rounded-md"
                onClick={() => alert("Form Submitted")}
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return <h1>Unknown Step</h1>;
    }
  };

  return (
    <div className="px-20 py-5 max-md:px-5">
      <div className="bg-theme text-xl font-semibold text-white p-4 uppercase rounded-md shadow-lg">
        <h1>Enter Details</h1>
      </div>
      {renderStepContent()}
    </div>
  );
};

const FormMain = () => {
  const [companyDetails, setCompanyDetails] = useState([]);
  return companyDetails.length <= 0 ? <StepperForm /> : <Home />;
};

export default FormMain;
