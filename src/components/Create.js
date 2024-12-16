import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [UserName, setUsername] = useState("");
  const [Email, setemail] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [City, setcityname] = useState("");
  const [Qualification, setQualification] = useState("");
  const [WorkPreference, setWorkPreference] = useState("");
  const [Gender, setGender] = useState("");
  const [loading, setloading] = useState(false);

  async function SendUSerDetails() {
    try {
      axios.post(
        "https://67496754868020296630dbbf.mockapi.io/userdetails/userdetails",
        {
          UserName: UserName,
          Email: Email,
          MobileNo: MobileNo,
          City: City,
          Qualification: Qualification,
          WorkPreference: WorkPreference,
          Gender: Gender,
        }, 
        
      );
    } catch (error) {
      console.log(error);
    } finally {
      setUsername("");
      setemail("");
      setMobileNo("");
      setcityname("");
      setQualification("");
      setWorkPreference("");
      setGender("");
      setloading(false);
     
    }
  }

  return (
    <div>
      <h1>CREATE OPERATIONS</h1>
      <form className="form" >
        <div>
          <label>UserName</label>
          <input
            type="text"
            placeholder=" eg. John"
            value={UserName}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>
        <div>
          <label>E-mail</label>
          <input
            type="text"
            placeholder="eg. John@gmail.com"
            value={Email}
            onChange={(event) => setemail(event.target.value)}
          ></input>
        </div>
        <div>
          <label>MobileNo</label>
          <input
            type="text"
            placeholder="eg. 9876543210"
            value={MobileNo}
            onChange={(event) => setMobileNo(event.target.value)}
          ></input>
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            placeholder="eg. Mumbai"
            value={City}
            onChange={(event) => setcityname(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Qualification</label>
          <input
            type="text"
            placeholder="eg. BE, MSC, MBA, etc.,"
            value={Qualification}
            onChange={(event) => setQualification(event.target.value)}
          ></input>
        </div>
        <div>
          <label>WorkPreference</label>
          <input
            type="text"
            placeholder="eg. WFH or WFO"
            value={WorkPreference}
            onChange={(event) => setWorkPreference(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Gender</label>
          <input
            type="text"
            placeholder="eg. Male or Female"
            value={Gender}
            onChange={(event) => setGender(event.target.value)}
          ></input>
        </div>
        <button  type="button" onClick={() => SendUSerDetails()}>
          Send Data
        </button>
        {loading && <p>data sending please wait......</p>}
      </form>
    </div>
  );
}

export default Create;
