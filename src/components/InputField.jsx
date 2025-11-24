

const InputField = ({ label, type="text", placeholder, value, onChange }) => {
    return (
        <div>
            <label className="input-field-label">{label}</label>
            <input
                type={type}
                className="input-field"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default InputField;