import { Link } from "react-router";

const LoginOrRegister = (props) => {
    return (
        <div className="bottom-register-text">
            <p>{props.mainText} <Link className="login-or-register" to={props.to}>{props.anchorText}</Link></p>
        </div>
    )
}

export default LoginOrRegister; 