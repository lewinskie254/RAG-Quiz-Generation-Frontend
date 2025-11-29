

const InputField = ({ label, type="text", placeholder, value, onChange, req }) => {
    return (
        <div>
            <label className="input-field-label">{label}</label>
            <input
                type={type}
                className="input-field"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={req} 
            />
        </div>
    );
};

export default InputField;