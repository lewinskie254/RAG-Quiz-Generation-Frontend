const MultipleChoiceAnswer = (props) => {
    return (
        <label className="check-container">
            <input type="checkbox" id ={props.id}/>
            <span className="checkmark"></span>
            {props.answer}
        </label>
    )
}

export default MultipleChoiceAnswer;