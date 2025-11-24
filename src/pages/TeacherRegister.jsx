import InputField from "../components/InputField";
import "../css/components.css";
import Button from "../components/button";
import Title from "../components/Title";
import LoginOrRegister from "../components/LoginOrRegister";
import { useState, useEffect, use } from "react";
import axios from "axios";

const TeacherRegister = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("") 
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [school, setSchool] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [schools, setSchools] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        await fetchSchools();   // wait for schools
      };
      fetchData();
    }, []); 

    const fetchSchools = async () => {
      try {
            const response = await axios.get('http://127.0.0.1:8000/api/school/show-all-schools/');
            console.log(response.data); 
            setSchools(response.data.schools); 
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
        }
    }


    const handleRegister = async () => {

        if (password === confirmPassword) {
            const user = {
                name,
                username, 
                phoneNumber, 
                password,
                school
            };
            console.log(`Name: ${user.name} School: ${user.school}`)
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/teacher/add-teacher/', user, { headers: { "Content-Type": "application/json" } });
                console.log("Success:", response.data);
                setName(""); 
                setPassword(""); 
                setSchool("")
                setPhoneNumber(""); 
                setUsername(""); 
                setConfirmPassword(""); 
            } catch (error) {
                console.error("Error:", error.response?.data || error.message);
            }
        } else {
            console.log("Password and Confirm Password have to be the same")
        }
    };


    return (
    <div className="container">
      <div className="register">
        <div className="input-div">
            <Title title="Admin Registration Page" />
            <div className="input-section">
                <InputField
                    placeholder="Full Names"
                    value={name}
                    onChange={setName}
                />

                <InputField
                    placeholder="Username"
                    value={username}
                    onChange={setUsername}
                />
                 <InputField
                    placeholder="Phone Number"
                    type="text"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                />

                <InputField
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                /> 

                <InputField
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                /> 
               

                <select
                    className="select-class"
                    name="school"
                    id="school"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                >
                  <option value="">Select School</option>
                  {schools.map((school) => (
                      <option key={school.id} value={school.id}>
                          {school.name}
                      </option>
                  ))}
                </select>

                <Button name="Register" onClick={handleRegister} /> 
                <LoginOrRegister mainText= "Already a Member? " anchorText="Login Here" href="https://www.google.com" />
            </div>
        </div>
        <div className="logo-div">
          <img src="src/assets/logo.jpg" alt="Logo" />
        </div>
      </div>
    </div>
    ); 
}; 

export default TeacherRegister; 