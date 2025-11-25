import Question from "./Question";
import AdminMultipleChoiceAnswer from "./AdminMultipleChoiceAnswer";

const AdminQuestionAndAnswer = (props) => {
    const questionId= props.questionId; 

    return(
        <div className="admin-question-and-answer">
            <Question question="This is the first question now and the provided timelines. "/> 
            <div className="answer-card">
                <h2 className="answer-title">Answers</h2>
                <div className="multiple-choice-answers">
                    <AdminMultipleChoiceAnswer correct="correct" answer="Answer to the first" />
                    <AdminMultipleChoiceAnswer answer="Answer to the second" />
                    <AdminMultipleChoiceAnswer answer="Answer to the third" />
                    <AdminMultipleChoiceAnswer answer="Answer to the fourth" />
                </div>
            </div>
        </div>
    )
}


export default AdminQuestionAndAnswer; 