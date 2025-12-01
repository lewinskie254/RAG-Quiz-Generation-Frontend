

const Button = (props) => {
    return (
        <div className="btn-wrapper">
            <button className={`btn ${props.inverse ? 'inverse' : ''}`} onClick ={props.onClick}>{props.name}</button>
        </div>
    )
}

export default Button; 