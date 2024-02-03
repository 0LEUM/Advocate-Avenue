/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import './lawyerSearch.css';

const LawyerSearch = () => {
    // Placeholder data for lawyer profiles
            const lawyerProfiles = [
                { 
                    name: 'Animesh Ganguly',
                    type: 'Criminal',
                    gender: 'Male',
                    state: 'West Bengal',
                    district: 'Hooghly',
                    email: 'animesh@mail.com',
                    workPhone: '123-456-7890',
                    chamberAddress: '123, ABC Street, Kolkata',
                    description: 'Experienced criminal lawyer with expertise in handling various criminal cases.',
                    details: 'Animesh Ganguly is a renowned criminal lawyer based in West Bengal. He is a member of the Bar Council of West Bengal and has extensive experience in handling criminal cases of varying complexities.'
                },
                { 
                    name: 'Rupsa Chatterjee',
                    type: 'Family Law',
                    gender: 'Female',
                    state: 'West Bengal',
                    district: 'Howrah',
                    email: 'rupsa@mail.com',
                    workPhone: '123-456-7890',
                    chamberAddress: '123, ABC Street, Kolkata',
                    description: 'Specialized in divorce law, helping clients through difficult times with compassion and expertise.',
                    details: 'John Doe is an expert in divorce law, providing compassionate and expert guidance to clients in California.'
                },
                { 
                    name: 'John Doe',
                    type: 'Civil',
                    gender: 'Male',
                    state: 'West Bengal',
                    district: 'North 24 Pargana',
                    email: 'animesh@mail.com',
                    workPhone: '123-456-7890',
                    chamberAddress: '123, ABC Street, Kolkata',
                    description: 'Specialized in divorce law, helping clients through difficult times with compassion and expertise.',
                    details: 'John Doe is an expert in divorce law, providing compassionate and expert guidance to clients in California.'
                },
                // Add more lawyer profiles as needed
            ];

    // State variables
    const [selectedType, setSelectedType] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [searchName, setSearchName] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [districts,setDistricts] = useState([]);

    const stateDistricts={
        'West Bengal': ['Howrah','Hooghly','North 24 Pargana'],
        'Delhi': ['East-Delhi','South-West'],
        'Mumbai': ['Thane','Navi Mumbai'],
    };

    // Function to handle search
    const handleSearch = () => {
        const results = lawyerProfiles.filter(profile => {
            return (
                (selectedType === '' || profile.type === selectedType) &&
                (selectedGender === '' || profile.gender === selectedGender) &&
                (selectedState === '' || profile.state === selectedState) &&
                (selectedDistrict === '' || profile.district === selectedDistrict) &&
                (searchName === '' || profile.name.toLowerCase().includes(searchName.toLowerCase()))
            );
        });
        setSearchResults(results);
    };

    useEffect(()=>{
        setDistricts(stateDistricts[selectedState] || []);
        setSelectedDistrict('');
    }, [selectedState]);

    // Function to toggle lawyer details
    const toggleDetails = (index) => {
        const updatedResults = [...searchResults];
        updatedResults[index].showDetails = !updatedResults[index].showDetails;
        setSearchResults(updatedResults);
    };

    return (
        <div className="main-ls">
            <div className="lawyer-search-container">
                <h1 className='h1c'>Find an Advocate</h1>
                <hr />
                <div className="search-form">
                    <select id="lawyer-type" onChange={(e) => setSelectedType(e.target.value)}>
                        <option value="" selected>Type of Advocate</option>
                        <option value="">All</option>
                        <option value="Criminal">Criminal</option>
                        <option value="Corporate">Corporte</option>
                        <option value="Civil">Civil</option>
                        <option value="Family Law">Family Law</option>
                    </select>
                    
                    <select id="gender" onChange={(e) => setSelectedGender(e.target.value)}>
                        <option value="" selected>Gender</option>
                        <option value="">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>

                    <select id="state" onChange={(e) => setSelectedState(e.target.value)}>
                        <option value="" selected>State</option>
                        <option value="">All</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>

                    <select id="district" onChange={(e) => setSelectedDistrict(e.target.value)}>
                        <option value="" selected>District</option>
                        {districts.map((district,index)=>(
                            <option key={index} value={district}>{district}</option>
                        ))}
                    </select>

                    <input type="text" placeholder="Search by name" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                </div>

                <div className="search-results">
                    {searchResults.length > 0 ? (
                        <div>
                            {searchResults.map((lawyer, index) => (
                                <div key={index} className="lawyer-card">
                                    <h2>{lawyer.name}</h2>
                                    <p>Type: {lawyer.type}</p>
                                    <p>Gender: {lawyer.gender}</p>
                                    <p>State: {lawyer.state}</p>
                                    <p>District: {lawyer.district}</p>
                                    <p>Description: {lawyer.description}</p>
                                    <p>Email: {lawyer.email}</p>
                                    <p>Work Phone Number: {lawyer.workPhone}</p>
                                    <p> Chamber Address: {lawyer.chamberAddress}</p>
                                    {/* <p className="read-more-link" onClick={() => toggleDetails(index)}>Read more</p> */}
                                    {lawyer.showDetails && (
                                        <div className="lawyer-details">
                                            <p>{lawyer.details}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h1 className='h2c'><b>No results found.</b></h1>
                    )}
                </div>
            </div>
        </div>


        
    );
};

export default LawyerSearch;
