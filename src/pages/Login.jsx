import InputField from "../components/InputField";
import "../css/components.css";
import Button from "../components/button";
import Title from "../components/Title";
import LoginOrRegister from "../components/LoginOrRegister";
import { useState, useRef, useEffect } from "react";


const Login = () => {
  const errRef = useRef(); 

  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [errMsg, setErrMessage] = useState(""); 
  const [success, setSuccess] = useState(false); 


  useEffect(()=> {
    setErrMessage(""); 
  }, [username, password])

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    console.log("submitted")
  }

  return (
    <div className="container">
      <div className="login">
        <div className="logo-div">
          <img src="src/assets/logo.jpg" alt="Logo" />
        </div>
        <div className="input-div">
            <Title title="Login Page"/>
            <p className={errMsg ? "error-message" : "off-screen"} aria-live="assertive">{errMsg}</p>
          <div className="input-section">
            <form onSubmit={handleFormSubmit}>
              <InputField placeholder="Username" value={username} onChange={setUsername} req={true}/>
              <InputField placeholder="Password" type = "password" value={password} onChange={setPassword} req={true}/>
              <Button name="Login" /> 
              <LoginOrRegister mainText= "New to EPA? " anchorText="Register Here" to="/register" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
