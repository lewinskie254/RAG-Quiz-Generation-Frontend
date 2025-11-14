

const InputField = (props) => {
    return (
        <div>
            <label className="input-field-label">{props.label}</label>
            <input type={props.type ? props.type : "text"} className="input-field" placeholder={props.placeholder}/>
        </div>
    )
}

export default InputField; 