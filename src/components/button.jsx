

const Button = (props) => {
    return (
        <div className="btn-wrapper">
            <a href={props.href} className="btn">{props.name}</a>
        </div>
    )
}

export default Button; 