import InputField from "../components/InputField";
import "../css/login.css";
import Button from "../components/button";
import Title from "../components/Title";


const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <div className="logo-div">
          <img src="src/assets/logo.jpg" alt="Logo" />
        </div>
        <div className="input-div">
            <Title title="Login Page" class="blue"/>
          <div className="input-section">
            <InputField placeholder="Username" />
            <InputField placeholder="Password"  type = "password"/>
            <Button name="Login"/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
