const Question = (props) => {
    return (
        <div className="question-card">
            <h2 className="question-title">Question</h2>
            {props.question}
        </div>
    )
}

export default Question; 