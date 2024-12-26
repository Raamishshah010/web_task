import React, { useState } from "react";
import Home from "../Home/Home";

const StepperForm = () => {
  const [componentCounter, setComponentCounter] = useState(0);

  const renderStepContent = () => {
    switch (componentCounter) {
      case 0:
        return (
          <div className="mt-12 shadow-lg bg-gray-100 rounded-md ">

        <div className="w-full  px-10 py-3 flex flex-col gap-2 text-paragpraph">
          <span className="text-sm font-semibold">Date</span>
          <input type="date" placeholder="Date" className="bg-transparent outline-none" />
        </div>

        <div className="w-full  px-10 py-3 flex flex-col gap-2 text-paragpraph">
          <span className="text-sm font-semibold">Name Of Factory/Client</span>
          <input type="text" placeholder="Name" className="bg-transparent outline-none" />
        </div>

        <div className="w-full  px-10 py-3 flex flex-col gap-2 text-paragpraph">
          <span className="text-sm font-semibold">Address</span>
          <input type="text" placeholder="Address" className="bg-transparent outline-none" />
        </div>

        <div className="w-full  px-10 py-3 flex flex-col gap-2 text-paragpraph">
          <span className="text-sm font-semibold">Factory's/Client's Representative Name</span>
          <input type="text" placeholder="Representative Name" className="bg-transparent outline-none" />
        </div>

        <div className="w-full  px-10 py-3 flex flex-col gap-2 text-paragpraph">
          <span className="text-sm font-semibold">Designation</span>
          <input type="text" placeholder="Designation" className="bg-transparent outline-none" />
        </div>

        <div className="w-full  px-10 py-3 flex flex-col gap-2 text-paragpraph">
          <span className="text-sm font-semibold">Contact E-mail Address</span>
          <input type="text" placeholder="Email" className="bg-transparent outline-none" />
        </div>
        

        <div className="w-full  px-10 py-3 flex flex-col gap-2 text-paragpraph">
          <span className="text-sm font-semibold">Contact Number</span>
          <input type="number" placeholder="Number" className="bg-transparent outline-none" />
        </div>


        <div className="px-10 py-6 float-end">
          <button className="bg-theme text-white text-sm px-12 py-2 rounded-md" onClick={() => setComponentCounter(1)}>Next</button>
        </div>
        
      </div>
        );
      case 1:
        return (
          <div className="mt-12 shadow-lg bg-gray-100 rounded-md">
            <h1 className="text-xl font-semibold px-10 py-5">
              Step 2: Client/Factory Details
            </h1>

            

            <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragpraph">
              <span className="text-sm font-semibold">No. Of Employees(Males/Females)</span>

              <div className="flex gap-5 flex-wrap">
                <div>
                <input
                type="number"
                placeholder="Male"
                className="bg-transparent outline-none"
              />
                </div>
                <div>
                <input
                type="number"
                placeholder="Female"
                className="bg-transparent outline-none"
              />
                </div>
              </div>
              
            </div>


            <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragpraph">
              <span className="text-sm font-semibold">No. Of Shifts</span>
              <input
                type="number"
                placeholder="Enter The Numbers"
                className="bg-transparent outline-none"
              />
            </div>


            <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragpraph">
              <span className="text-sm font-semibold">Area Of The Factory(sqm/sqf)</span>
              <input
                type="number"
                placeholder="Enter The Numbers"
                className="bg-transparent outline-none"
              />
            </div>

            <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragpraph">
              <span className="text-sm font-semibold">Production Capacity</span>
              <input
                type="text"
                placeholder="Units"
                className="bg-transparent outline-none"
              />
            </div>

            <div className="w-full px-10 py-3 flex flex-col gap-2 text-paragpraph">
              <span className="text-sm font-semibold">Major Production Processess</span>
              <input
                type="text"
                placeholder="Production Process"
                className="bg-transparent outline-none"
              />
            </div>

            <div className="px-10 py-6 flex justify-between">
              <button
                className="bg-gray-500 text-white text-sm px-12 py-2 rounded-md"
                onClick={() => setComponentCounter(0)} // Go back to the previous step
              >
                Back
              </button>
              <button
                className="bg-theme text-white text-sm px-12 py-2 rounded-md"
                onClick={() => setComponentCounter(2)} // Go to the next step
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mt-12 shadow-lg bg-gray-100 rounded-md">
            <h1 className="text-xl font-semibold px-10 py-5">Step 3: Confirm Details</h1>
            <p className="px-10">Review all your information before submitting.</p>
            <div className="px-10 py-6 flex justify-between">
              <button
                className="bg-gray-500 text-white text-sm px-12 py-2 rounded-md"
                onClick={() => setComponentCounter(1)} // Go back to the previous step
              >
                Back
              </button>
              <button
                className="bg-green-500 text-white text-sm px-12 py-2 rounded-md"
                onClick={() => alert("Form Submitted")} // Final action
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
    <>
      <div className="px-20 py-5 max-md:px-5">
        <div>
          <div className="bg-theme text-xl font-semibold text-white p-4 uppercase rounded-md shadow-lg">
            <h1>Enter Details</h1>
          </div>

          {/* Render content based on the current step */}
          {renderStepContent()}
        </div>
      </div>
    </>
  );
};

const FormMain = () => {
  const [companyDetails, setCompanyDetails] = useState([]);
  return <>{companyDetails.length <= 0 ? <StepperForm /> : <Home />}</>;
};

export default FormMain;
