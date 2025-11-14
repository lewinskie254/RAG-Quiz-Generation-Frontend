import InputField from "../components/InputField";
import "../css/components.css";
import Button from "../components/button";
import Title from "../components/Title";
import LoginOrRegister from "../components/LoginOrRegister";


const Register = () => {
    return (
    <div className="container">
      <div className="register">
        <div className="logo-div">
          <img src="src/assets/logo.jpg" alt="Logo" />
        </div>
        <div className="input-div">
            <Title title="Registration Page" />
            <div className="input-section">
                <InputField placeholder="Full Names" />
                <InputField placeholder="Username" />
                <InputField placeholder="Password"  type = "password"/>
                <InputField placeholder="Confirm password"  type = "password"/>
                <Button name="Register"/> 
                <LoginOrRegister mainText= "Already a Member? " anchorText="Login Here" href="https://www.google.com" />
            </div>
        </div>
      </div>
    </div>
    ); 
}; 

export default Register; 