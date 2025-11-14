import InputField from "../components/InputField";
import "../css/components.css";
import Button from "../components/button";
import Title from "../components/Title";
import LoginOrRegister from "../components/LoginOrRegister";


const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <div className="logo-div">
          <img src="src/assets/logo.jpg" alt="Logo" />
        </div>
        <div className="input-div">
            <Title title="Login Page"/>
          <div className="input-section">
            <InputField placeholder="Username" />
            <InputField placeholder="Password"  type = "password"/>
            <Button name="Login"/> 
            <LoginOrRegister mainText= "New to EPA? " anchorText="Register Here" href="https://www.google.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
