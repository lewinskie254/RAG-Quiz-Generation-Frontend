

const AdminMultipleChoiceAnswer = (props) => {
    return (
        <label className={`check-container ${props.correct ? "correct" : ""}`}>
            <input type="checkbox" id ={props.id}/>
            <span className="checkmark"></span>
            {props.answer}
        </label>
    )
}

export default AdminMultipleChoiceAnswer;