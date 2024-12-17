import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AddDetails = () => {

    const navigation = useNavigate()

    const [formData, setFormData] = useState({
        date: '',
        clientName: '',
        address: '',
        representativeName: '',
        designation: '',
        email: '',
        mobile: '',
        maleEmployees: '',
        femaleEmployees: '',
        shifts: '',
        factoryArea: '',
        productionCapacity: '',
        productionProcesses: '',
      });

      const initialFormData = {
        date: '',
        clientName: '',
        address: '',
        representativeName: '',
        designation: '',
        email: '',
        mobile: '',
        maleEmployees: '',
        femaleEmployees: '',
        shifts: '',
        factoryArea: '',
        productionCapacity: '',
        productionProcesses: '',
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };


      const submitDetails = async () => {
        try {
          const response = await axios.post('http://localhost:5000/details/add-detail', formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log('Response from server:', response.data);
          alert('Details added successfully!');
          setFormData(initialFormData);
          navigation('/')
        } catch (error) {
          console.error('Error adding details:', error);
          alert('Failed to add details. Please try again.');
        }
      };

  return (
    <>
            {/* CONTACT DETAIL */}
        <div className='px-20 mt-12  max-md:p-5'>
            
            {/* USER DETAILS */}
            <div>
                <h1 className='text-lg underline text-gray-800 font-semibold '>Contact Details</h1>

                <div className='flex gap-1 w-full mt-2 flex-wrap max-lg:flex-col max-lg:border-2 border-gray-800 max-lg:mb-6'>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                        <p>Date</p>
                    </div>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                        <input type="date" name='date' value={formData.date} 
                        onChange={handleInputChange} className='w-full outline-none bg-transparent' placeholder='Click Calander Icon to Select' />
                    </div>
                </div>

                <div className='flex gap-1 w-full mt-2 flex-wrap max-lg:flex-col max-lg:border-2 border-gray-800 max-lg:mb-6'>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                    <p>Name of the factory/client</p>
                        
                    </div>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                        <input type="text" name='clientName' value={formData.clientName} onChange={handleInputChange} className='w-full outline-none bg-transparent' placeholder='Click here to type' />
                    </div>
                </div>

                <div className='flex gap-1 w-full mt-2 flex-wrap max-lg:flex-col max-lg:border-2 border-gray-800 max-lg:mb-6'>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                    <p>Address</p>
                        
                    </div>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                        <input type="text"  name='address' value={formData.address} onChange={handleInputChange} className='w-full outline-none bg-transparent' placeholder='Click here to type' />
                    </div>
                </div>

                <div className='flex gap-1 w-full mt-2 flex-wrap max-lg:flex-col max-lg:border-2 border-gray-800 max-lg:mb-6'>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                    <p>Factory's/Client's representative Name</p>
                        
                    </div>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                        <input type="text"  name='representativeName' value={formData.representativeName} onChange={handleInputChange} className='w-full outline-none bg-transparent' placeholder='Click here to type' />
                    </div>
                </div>

                <div className='flex gap-1 w-full mt-2 flex-wrap max-lg:flex-col max-lg:border-2 border-gray-800 max-lg:mb-6'>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                    <p>Designation</p>
                        
                    </div>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                        <input type="text"  name='designation' value={formData.designation} onChange={handleInputChange} className='w-full outline-none bg-transparent' placeholder='Click here to type' />
                    </div>
                </div>

                <div className='flex gap-1 w-full mt-2 flex-wrap max-lg:flex-col max-lg:border-2 border-gray-800 max-lg:mb-6'>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                    <p>Contact e-mail address</p>
                        
                    </div>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                        <input type="text" name='email' value={formData.email} onChange={handleInputChange} className='w-full outline-none bg-transparent' placeholder='Click here to type' />
                    </div>
                </div>

                <div className='flex gap-1 w-full mt-2 flex-wrap max-lg:flex-col max-lg:border-2 border-gray-800 max-lg:mb-6'>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                    <p>Contact mobile number</p>
                        
                    </div>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                        <input type="number" name='mobile' value={formData.mobile} onChange={handleInputChange} className='w-full outline-none bg-transparent' placeholder='Click here to type' />
                    </div>
                </div>

               

            </div>

            {/* FACTORY DETAILS */}

            <div className='my-12'>
                <h1 className='text-lg underline text-gray-800 font-semibold '>Contact Details</h1>

                

                <div className='flex gap-1 w-full mt-2 flex-wrap max-lg:flex-col max-lg:border-2 border-gray-800 max-lg:mb-6'>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                    <p>Number of employees</p>
                        
                    </div>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none flex items-center'>
                        <div className='flex gap-2'>
                            <p>Male</p>
                            <input type="number" name='maleEmployees' value={formData.maleEmployees} onChange={handleInputChange} className='w-full outline-none bg-transparent' placeholder='Click here to type' />
                        </div>
                        <div className='flex gap-2'>
                            <p>Female</p>
                            <input type="number" name='femaleEmployees' value={formData.femaleEmployees} onChange={handleInputChange} className='w-full outline-none bg-transparent' placeholder='Click here to type' />
                        </div>
                    </div>
                </div>

                <div className='flex gap-1 w-full mt-2 flex-wrap max-lg:flex-col max-lg:border-2 border-gray-800 max-lg:mb-6'>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                    <p>Number of shifts</p>
                        
                    </div>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                        <input type="number" name='shifts' value={formData.shifts} onChange={handleInputChange} className='w-full outline-none bg-transparent' placeholder='Click here to type' />
                    </div>
                </div>

                <div className='flex gap-1 w-full mt-2 flex-wrap max-lg:flex-col max-lg:border-2 border-gray-800 max-lg:mb-6'>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                    <p>Area of the factory (sqm/sqf)</p>
                        
                    </div>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                        <input type="number" name='factoryArea' value={formData.factoryArea} onChange={handleInputChange} className='w-full outline-none bg-transparent' placeholder='Click here to type' />
                    </div>
                </div>

                <div className='flex gap-1 w-full mt-2 flex-wrap max-lg:flex-col max-lg:border-2 border-gray-800 max-lg:mb-6'>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                    <p>Production Capacity</p>
                        
                    </div>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                        <input type="text" name='productionCapacity' value={formData.productionCapacity} onChange={handleInputChange} className='w-full outline-none bg-transparent' placeholder='Click here to type' />
                    </div>
                </div>

                <div className='flex gap-1 w-full mt-2 flex-wrap max-lg:flex-col max-lg:border-2 border-gray-800 max-lg:mb-6'>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                    <p>Major production processes</p>
                        
                    </div>
                    <div className='border-2 border-gray-800 p-3 flex-1 max-lg:border-none'>
                        <input type="text"  name='productionProcesses' value={formData.productionProcesses} onChange={handleInputChange} className='w-full outline-none bg-transparent' placeholder='Click here to type' />
                    </div>
                </div>

               
               

            </div>


            <button className='bg-blue-600 px-5 py-2 mb-5 text-white rounded-lg cursor-pointer' onClick={submitDetails}>Submit</button>


        </div>
    </>
  )
}

export default AddDetails
