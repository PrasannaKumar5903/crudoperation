import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Update() {
  const [UserName, setUsername] = useState("");
  const [Email, setemail] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [City, setcityname] = useState("");
  const [Qualification, setQualification] = useState("");
  const [WorkPreference, setWorkPreference] = useState("");
  const [Gender, setGender] = useState("");

  useEffect(() => {
    getSingleUserData();
  }, []);

  const { id } = useParams();

  async function getSingleUserData() {
    const response = await axios.get(
      "https://67496754868020296630dbbf.mockapi.io/userdetails/userdetails/" +
        id
    );
    setUsername(response.data.UserName);
    setemail(response.data.Email);
    setMobileNo(response.data.MobileNo);
    setcityname(response.data.City);
    setQualification(response.data.Qualification);
    setWorkPreference(response.data.WorkPreference);
    setGender(response.data.Gender);
  }

  async function updateUserData() {
    await axios.put(
      "https://67496754868020296630dbbf.mockapi.io/userdetails/userdetails/" +
        id,
      {
        UserName: UserName,
        Email: Email,
        MobileNo: MobileNo,
        City: City,
        Qualification: Qualification,
        WorkPreference: WorkPreference,
        Gender: Gender,
      }
     
    );
   
  }
   

  return (
    <div>
      <h1>
        Here is the UPDATE page , You can Update what you want.... Happy
        updating
      </h1>

      <form className="form">
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={UserName}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>
        <div>
          <label>E-mail</label>
          <input
            type="text"
            value={Email}
            onChange={(event) => setemail(event.target.value)}
          ></input>
        </div>
        <div>
          <label>MobileNo</label>
          <input
            type="text"
            value={MobileNo}
            onChange={(event) => setMobileNo(event.target.value)}
          ></input>
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            value={City}
            onChange={(event) => setcityname(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Qualification</label>
          <input
            type="text"
            value={Qualification}
            onChange={(event) => setQualification(event.target.value)}
          ></input>
        </div>
        <div>
          <label>WorkPreference</label>
          <input
            type="text"
            value={WorkPreference}
            onChange={(event) => setWorkPreference(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Gender</label>
          <input
            type="text"
            value={Gender}
            onChange={(event) => setGender(event.target.value)}
          ></input>
        </div>
        <button type="button" onClick={() => updateUserData()  }>
          Update data
        </button>
        
      </form>
    </div>
  );
}

export default Update;
