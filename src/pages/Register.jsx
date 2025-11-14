import InputField from "../components/InputField";
import "../css/components.css";
import Button from "../components/button";
import Title from "../components/Title";
import LoginOrRegister from "../components/LoginOrRegister";


const Register = () => {
    return (
    <div className="container">
      <div className="register">
        <div className="input-div">
            <Title title="Registration Page" />
            <div className="input-section">
                <InputField placeholder="Full Names" />
                <InputField placeholder="Username" />
                <InputField placeholder="Password"  type = "password"/>
                <InputField placeholder="Confirm password"  type = "password"/>
                <select className= "select-class" name="school" id="school"> 
                    <option value="">Choose Your School</option> 
                    <option value="aei">Ashley's Events Institute</option> 
                    <option value="musk">Musk Global</option> 
                    <option value="other">Other</option> 
                </select>
                <Button name="Register"/> 
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