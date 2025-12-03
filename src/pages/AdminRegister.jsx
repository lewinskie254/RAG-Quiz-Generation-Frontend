import InputField from "../components/InputField";
import "../css/components.css";
import Button from '../components/CoolButton.jsx'; 
import Title from "../components/Title";
import LoginOrRegister from "../components/LoginOrRegister";
import { useState, useEffect} from "react";
import axios from "../api/axios.jsx";
import Logo from "../assets/logo.jpg";


const AdminRegister = () => {
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
            const response = await axios.get('/school/show-all-schools/');
            console.log(response.data); 
            setSchools(response.data.schools); 
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
        }
    }


    const handleRegister = async (e) => {
        e.preventDefault(); 
        if (password === confirmPassword) {
            const user = {
                name,
                username, 
                phoneNumber, 
                password,
                school
            };
            try {
                const response = await axios.post('/teacher/add-teacher/', user, { headers: { "Content-Type": "application/json" } });
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
            <div className="registration-input-section">
                <form onSubmit={handleRegister} >
                    <InputField
                        placeholder="Full Names"
                        value={name}
                        onChange={setName}
                        req={true}
                    />

                    <InputField
                        placeholder="Username"
                        value={username}
                        onChange={setUsername}
                        req={true}
                    />
                    <InputField
                        placeholder="Phone Number"
                        type="text"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
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

                    <Button name="Register" /> 
                </form>
                <LoginOrRegister mainText= "Already a Member? " anchorText="Login Here" to='/' />

            </div>
        </div>
        <div className="logo-div">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
    ); 
}; 

export default AdminRegister; 