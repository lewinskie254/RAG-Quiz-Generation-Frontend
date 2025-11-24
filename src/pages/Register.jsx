import InputField from "../components/InputField";
import "../css/components.css";
import Button from "../components/button";
import Title from "../components/Title";
import LoginOrRegister from "../components/LoginOrRegister";
import { useState } from "react";


const Register = () => {
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("") 
    const [password, setPassword] = useState("")
    const [school, setSchool] = useState("")

    const handleRegister = () => {
        console.log(name, userName, password, school);
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
                    placeholder="Username"
                    value={userName}
                    onChange={setUserName}
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
                    <option value="">Choose Your School</option>
                    <option value="aei">Ashley's Events Institute</option>
                    <option value="musk">Musk Global</option>
                    <option value="other">Other</option>
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