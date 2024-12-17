import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidShow, BiSolidTrashAlt } from "react-icons/bi";

import { deleteDetail, getDetails } from "../../apiService";

const AllDetails = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getDetails();
        setDetails(data.data);
      } catch (err) {
        setError("Failed to fetch details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  //! DELETE DETAIL
  const deleteDetailBtn = async (deleteID) => {
    console.log(`deleteID to delete:`, deleteID);

    try {
      const response = await deleteDetail(deleteID);
      console.log("Delete Response:", response);

      if (response.status === "success") {
        setDetails((prevDetails) =>
          prevDetails.filter((item) => item._id !== deleteID)
        );
      } else {
        console.error("Failed to delete detail:", response.message);
      }
    } catch (error) {
      console.error("Error while deleting detail:", error.message);
    }
  };

  return (
    <>
      <div className="px-20 mt-24 overflow-x-auto custom-scrollbar">
        <div className="float-right mb-12 absolute top-7 right-20">
          <Link
            to={"/add-details"}
            className="bg-blue-600 text-sm px-6 py-2 text-white rounded-lg"
          >
            + Add Detail
          </Link>
        </div>
        <div className="min-w-[900px] mx-auto">
          <div className="bg-blue-600 text-white p-5 rounded-lg flex justify-between text-xs shadow-lg mb-5 font-semibold">
            <h5>Name</h5>
            <p>Representative</p>
            <p>Designation</p>
            <p>Address</p>
            <p>Email</p>
            <p>No. Of Employees</p>
            <p>Handle</p>
          </div>

          {details.map((item, index) => (
            <div
              className="bg-[#f6f6f6] p-5 rounded-lg flex justify-between text-xs shadow-lg mb-5 text-center"
              key={index}
            >
              <h5>{item.clientName}</h5>
              <p>{item.representativeName}</p>
              <p>{item.designation}</p>
              <p>{item.address}</p>
              <p>{item.email}</p>
              <p>{item.maleEmployees + item.femaleEmployees}</p>
              <div className="text-base flex gap-4">
                <Link className="text-blue-400">
                  <BiSolidShow />
                </Link>
                <span
                  className="text-red-700 cursor-pointer"
                  onClick={() => deleteDetailBtn(item._id)}
                >
                  <BiSolidTrashAlt />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllDetails;
