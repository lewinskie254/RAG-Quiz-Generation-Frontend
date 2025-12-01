import Question from "./Question";
import AdminMultipleChoiceAnswer from "./AdminMultipleChoiceAnswer";
import React, { useEffect, useState} from "react";
import axios from "../api/axios";


const AdminQuestionAndAnswer = ({ question }) => {
    const { id, question: qText, answer, quiz } = question;
    const [choices, setChoices] = useState([]); 
    const [correctIndex, setCorrectIndex] = useState(0); 

    const evaluateCorrectChoice = () => {
        for (let i = 0; i < choices.length; i++) {
            if (choices[i].content == answer) {
                setCorrectIndex(i);
                break;
            }
        }
    };
  
    useEffect(() => { 
        if (question) {
            const fetchQuestion = async() => {
                await fetchMultipleChoices(id); 
            }
            fetchQuestion(); 
        }
    }, [question]);

    useEffect(() => {
        if (choices.length > 0) {
            evaluateCorrectChoice();
        }
    }, [choices]);

    const fetchMultipleChoices = async(id) => {
        try {
            const response = await axios.get(`/quiz/show-multiple-choices-for-question/${id}`); 
            setChoices(response.data.choices)
        }catch (e) {
            console.log(`error: ${e}`); 
        }
    }

    return (
        <div className="admin-question-and-answer">
            <Question question={qText}/> 
            <div className="answer-card">
                <h2 className="answer-title">Answers</h2>
                <div className="multiple-choice-answers">
                    {
                        choices.map((choice, index) => (
                            <AdminMultipleChoiceAnswer 
                                key={choice.id}
                                id={choice.id}
                                correct={index === correctIndex}
                                answer={choice.content}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default AdminQuestionAndAnswer;
