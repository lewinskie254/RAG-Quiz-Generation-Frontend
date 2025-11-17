const MultipleChoiceAnswer = (props) => {
    return (
        <label class="check-container">
            <input type="checkbox" id ={props.id} checked={props.checked || false} onChange={props.onChange} />
            <span class="checkmark"></span>
            {props.answer}
        </label>
    )
}

export default MultipleChoiceAnswer;