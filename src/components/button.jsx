

const Button = (props) => {
    return (
        <div className="btn-wrapper">
            <Button className="btn" onClick ={props.onClick}>{props.name}</Button>
        </div>
    )
}

export default Button; 