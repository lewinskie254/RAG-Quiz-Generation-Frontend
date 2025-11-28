import SidePanelBtn from "../components/SidePanelBtn";
import Title from "../components/Title";
import '../css/components.css'; 
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageBtn from "../components/ImageBtn";
import MultipleChoiceAnswer from "../components/MultipleChoiceAnswer";
import Question from "../components/Question";
import backUrl from "../assets/back.svg"; 
import nextUrl from "../assets/next.svg"
import ProgressBar from "../components/ProgressBar";


const StudentQuizView = () => {
     const {quizId} = useParams() 
     const [quizQuestions, setQuizQuestions] = useState([]);
     const [currentQuestion, setCurrentQuestion] = useState({}); 
     const [currentId, setCurrentId] = useState(0); 
     const [choices, setChoices] = useState([]); 
     const [isLoaded, setIsLoaded] = useState(false); 


    useEffect(() => {
    const fetchData = async () => {
        await fetchQuizQuestions (); 
    }
    fetchData(); 
    }, [])

    useEffect(() => {
        if (quizQuestions.length === 0) return;

        const fetchChoicesData = async () => {
            const question = quizQuestions[currentId];
            setCurrentQuestion(question); // update state for UI
            const response = await axios.get(`http://127.0.0.1:8000/api/quiz/show-multiple-choices-for-question/${question.id}`);
            setChoices(response.data.choices); 
            setIsLoaded(true); 
        }

        fetchChoicesData()
    }, [currentId, quizQuestions])



     const fetchQuizQuestions = async () => {
        try{
            const response = await axios.get(`http://127.0.0.1:8000/api/quiz/show-all-questions-per-quiz/${quizId}`)
            setQuizQuestions(response.data.questions); 
        } catch (err) {
            console.error(err); 
        }
     }

     const fetchChoicesForQuestion = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/quiz/show-multiple-choices-for-question/${currentQuestion.id}`)
            setChoices(response.data.choices); 
        } catch (err) {
            console.error(err)
        }
     }

    const nextQuestion = () => {
        setCurrentId((curr) => {
            if (curr < quizQuestions.length - 1) {
                return curr + 1;
            } else {
                return curr; 
            }
        });
    }

    const prevQuestion = () => {
        setCurrentId((curr) => {
            if (curr > 0) {
                return curr - 1;
            } else {
                return curr; 
            }
        });
    }

    const logProgress = () => {
        if (currentId == 0) return "0%"
        return `${Math.round(((currentId)/(quizQuestions.length))*100)}%`
    }


    return (
        <div className="container">
            <div className="quiz">
                <aside className="quiz-panel">
                    <ul className="quiz-side-panel">
                        <Title title="Quizzes"/>
                        <hr className='quiz-side-panel-underline'/>
                        <SidePanelBtn title="Unit 1"/>
                        <SidePanelBtn title="Unit 2"/>
                        <SidePanelBtn title="Unit 3"/>
                        <SidePanelBtn title="Unit 4"/>
                        <SidePanelBtn title="Unit 5"/>
                        <SidePanelBtn title="Unit 6"/>
                        <SidePanelBtn title="Unit 7"/>
                        <SidePanelBtn title="Unit 8"/>
                        <SidePanelBtn title="Unit 9"/>
                        <SidePanelBtn title="Unit 10"/>
                    </ul>
                </aside>
                <div className="quizzes-content">
                    <div className="question-and-answer">
                    {
                        isLoaded && (
                            <Question question={currentQuestion.question}/> 
                        )
                    }
                    <div className="answer-card">
                        <h2 className="answer-title">Answers</h2>
                        <div className="multiple-choice-answers">
                            {
                                choices.map((choice, index) => (
                                    <MultipleChoiceAnswer key={index} answer={choice.content} value={choice.id}/> 
                                ))
                            }
                        </div>
                    </div>
                    <div className="quiz-progress">
                        <ImageBtn imgUrl={backUrl} onClick={prevQuestion}/> 
                        <ProgressBar progressAmount = {logProgress()} progressWidth={logProgress()}/>
                        <ImageBtn imgUrl={nextUrl} onClick={nextQuestion}/> 
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}


export default StudentQuizView; 