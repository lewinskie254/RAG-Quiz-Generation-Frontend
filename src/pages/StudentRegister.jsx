import InputField from "../components/InputField";
import "../css/components.css";
import Button from '../components/Button'; 
import Title from "../components/Title";
import LoginOrRegister from "../components/LoginOrRegister";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "../api/axios.jsx";

const StudentRegister = () => {
    const navigate = useNavigate(); 
    const [name, setName] = useState(""); 
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [school, setSchool] = useState(""); 
    const [course, setCourse] = useState(""); 
    const [phoneNumber, setPhoneNumber] = useState(""); 
    const [schools, setSchools] = useState([]); 
    const [courses, setCourses] = useState([]); 
    const [success, setSuccess] = useState(false); 
    const [loaded, setLoaded] = useState(false); 
    const [errorMsg, setErrorMsg] =useState(""); 

    useEffect(() => {
      const fetchData = async () => {
        await fetchSchools();   
        await fetchCourses();   
      };
      fetchData();
    }, []); 

    const fetchSchools = async () => {
      try {
            const response = await axios.get('/school/show-all-schools/');
            setSchools(response.data.schools); 
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
        }
    }

    const fetchCourses = async () => {
      try {
            const response = await axios.get('/course/show-all-courses/');
            setCourses(response.data.courses); 
    } catch (error) {
            console.error("Error:", error.response?.data || error.message);
        }
    }

    const handleError = async () => {
        setLoaded(true); 
        setSuccess(false);
        setErrorMsg("Something went wrong");

        // wait 1 second
        await sleep(3000);

        navigate("/register"); 

        // reset form and state after wait
        setName(""); 
        setPassword(""); 
        setConfirmPassword("");
        setSchool("");
        setPhoneNumber(""); 
        setUsername(""); 
        setErrorMsg(""); 
        setLoaded(false); 
    };

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


    const handleRegister = async (e) => {    
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMsg("Passwords do not match");
            setLoaded(true);
            return;
        }

        const user = {
            name,
            username, 
            phoneNumber, 
            password,
            course, 
            school
        };

        try {
            await axios.post('student/add-student/', user, { headers: { "Content-Type": "application/json" } });
            setLoaded(true); 
            setSuccess(true); 
            setName(""); 
            setPassword(""); 
            setConfirmPassword("");
            setSchool("");
            setPhoneNumber(""); 
            setUsername(""); 

            // wait 1 second
            await sleep(3000);

            navigate('/')
        } catch (error) {
            handleError(); 
        }
    };



    return (
    <div className="container">
      <div className="register">
        <div className="input-div">
            <Title title="Student Registration Page" />
            <div className="input-section">
                <form onSubmit={handleRegister}>
                    <InputField
                        placeholder="Full Names"
                        value={name}
                        onChange={setName}
                        req={true}
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
                        req={true}
                    />

                    <InputField
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={setPassword}
                        req={true}
                    />

                    <InputField
                        placeholder="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={setConfirmPassword}
                        req={true}
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
                    <Button name="Register"/> 
                </form>
                { loaded ? <div className={`registration-success ${success ? 'correct-reg' : 'failed'}`}>
                    {
                        success ? <p>You have been registered Successfully</p> : <p>{errorMsg}</p>
                    }
                </div>: <div></div> }
                <LoginOrRegister mainText= "Already a Member? " anchorText="Login Here" to="/" />
            </div>
        </div>
        <div className="logo-div">
          <img src="src/assets/logo.jpg" alt="Logo" />
        </div>
      </div>
    </div>
    ); 
}; 

export default StudentRegister; 