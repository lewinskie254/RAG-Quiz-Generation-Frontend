const LoginOrRegister = (props) => {
    return (
        <div className="bottom-register-text">
            <p>{props.mainText} <a className="login-or-register" href={props.href}>{props.anchorText}</a></p>
        </div>
    )
}

export default LoginOrRegister; 