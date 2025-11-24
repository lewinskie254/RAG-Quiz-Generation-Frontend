import InputField from "../components/InputField";
import "../css/components.css";
import Button from "../components/button";
import Title from "../components/Title";
import LoginOrRegister from "../components/LoginOrRegister";
import { useState, useEffect, use } from "react";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("") 
    const [password, setPassword] = useState("")
    const [school, setSchool] = useState("")
    const [course, setCourse] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [schools, setSchools] = useState([])
    const [courses, setCourses] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        await fetchSchools();   // wait for schools
        await fetchCourses();   // then wait for courses
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

    const fetchCourses = async () => {
      try {
            const response = await axios.get('http://127.0.0.1:8000/api/course/show-all-courses/');
            console.log(response.data); 
            setCourses(response.data.courses); 
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
        }
    }


    const handleRegister = async () => {
        const user = {
            name,
            username, 
            phoneNumber, 
            password,
            course, 
            school
        };
        console.log(`Name: ${user.name} Course: ${user.course},  School: ${user.school}`)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/student/add-student/', user, { headers: { "Content-Type": "application/json" } });
            console.log("Success:", response.data);
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
        }
    };


    return (
    <div className="container">
      <div className="register">
        <div className="input-div">
            <Title title="Registration Page" />
            <div className="input-section">
                <InputField
                    placeholder="Full Names"
                    value={name}
                    onChange={setName}
                />

                <InputField
                    placeholder="Phone Number"
                    type="text"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                />

                <InputField
                    placeholder="Username"
                    value={username}
                    onChange={setUsername}
                />

                <InputField
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
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

                <select
                    className="select-class"
                    name="course"
                    id="course"
                    value={course}
                    onChange={(e) => {
                      console.log("Selected course:", e.target.value);
                      setCourse(e.target.value);
                    }}
                >
                  <option value="">Select Course</option>
                  {courses.map((c) => (
                      <option key={c.id} value={c.id}>
                          {c.name}
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

export default Register; 