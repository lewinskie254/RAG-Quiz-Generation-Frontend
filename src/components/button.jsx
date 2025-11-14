

const Button = (props) => {
    return (
        <div>
            <a href={props.href} className="btn">{props.name}</a>
        </div>
    )
}

export default Button; 