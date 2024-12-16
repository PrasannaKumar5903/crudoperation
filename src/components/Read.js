import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaArrowCircleUp } from "react-icons/fa";


function Read() {

  const navigate = useNavigate()
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);


  function goToUpdatePage(userId){
    navigate('/update/' + userId)
  }
  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    setloading(true);
    try {
      const response = await axios.get(
        "https://67496754868020296630dbbf.mockapi.io/userdetails/userdetails"
      );
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }

  async function deleteUserById(userId) {
    await axios.delete(
      `https://67496754868020296630dbbf.mockapi.io/userdetails/userdetails/` +
        userId
    );
    getUserData();
  }

  return (
    <div>
      <h1>USER DETAILS</h1>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Email</th>
            <th>MobileNo</th>
            <th>City</th>
            <th>Qualification</th>
            <th>WorkPreference</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((value, index) => {
            return (
              <tr key={value.id }>
                <td>{value.id}</td>
                <td>{value.UserName}</td>
                <td>{value.Email}</td>
                <td>{value.MobileNo}</td>
                <td>{value.City}</td>
                <td>{value.Qualification}</td>
                <td>{value.WorkPreference}</td>
                <td>{value.Gender}</td>
                <td>
                  <button  className="deletebutton" onClick={() => deleteUserById(value.id)}>
                  <RiDeleteBin6Fill /> Delete 
                  </button>
                </td>
                <td>
                  <button className="Updatebutton" onClick={()=> goToUpdatePage(value.id)}>
                  <FaArrowCircleUp /> Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        
      </table>
      {loading && <p>Data fetching please wait......</p>}
    </div>
  );
}

export default Read;
