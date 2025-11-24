

const Button = (props) => {
    return (
        <div className="btn-wrapper">
            <button className="btn" onClick ={props.onClick}>{props.name}</button>
        </div>
    )
}

export default Button; 