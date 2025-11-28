const MultipleChoiceAnswer = (props) => {
    return (
        <label className="check-container">
            <input type="checkbox" value={props.value}/>
            <span className="checkmark"></span>
            {props.answer}
        </label>
    )
}

export default MultipleChoiceAnswer;