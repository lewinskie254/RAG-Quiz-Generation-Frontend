import MultipleChoiceAnswer from "../components/MultipleChoiceAnswer";
import Question from "../components/Question";
import backUrl from "../assets/back.svg"; 
import nextUrl from "../assets/next.svg"
import ProgressBar from "../components/ProgressBar";
import ImageBtn from "../components/ImageBtn";
import EssayAnswer from "./EssayAnswer";


const QuestionAndAnswer = (props) => {
    return (
        <div className="question-and-answer">
            <Question question="This is the first question now and the provided timelines. "/> 
            <div className="answer-card">
                <h2 className="answer-title">Answers</h2>
                <div className="multiple-choice-answers">
                    <MultipleChoiceAnswer answer="The first answer"/> 
                    <MultipleChoiceAnswer answer="The second answer"/> 
                    <MultipleChoiceAnswer answer="The third answer"/> 
                    <MultipleChoiceAnswer answer="The fourth answer"/>
                </div>
            </div>
            <div className="quiz-progress">
                <ImageBtn imgUrl={backUrl}/> 
                <ProgressBar progressAmount = "50%" progressWidth="50%"/>
                <ImageBtn imgUrl={nextUrl}/> 
            </div>
        </div>
    )
}

export default QuestionAndAnswer; 