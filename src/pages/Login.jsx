import InputField from "../components/InputField";
import "../css/login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <div className="logo-div">
          <img src="src/assets/logo.webp" alt="Logo" />
        </div>
        <div className="input-div">
          <InputField placeholder="Username" />
          <InputField placeholder="Password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
