import Question from "./Question";
import AdminMultipleChoiceAnswer from "./AdminMultipleChoiceAnswer";
import React, { useEffect } from "react";


const AdminQuestionAndAnswer = ({ question }) => {
    const { id, question: qText, answer, quiz } = question;

    useEffect(() => { 
        if (question) {
            console.log(question); 
        }
    }, [question]); // <-- dependency array includes question

    return (
        <div className="admin-question-and-answer">
            <Question question={qText}/> 
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
    );
}

export default AdminQuestionAndAnswer;
