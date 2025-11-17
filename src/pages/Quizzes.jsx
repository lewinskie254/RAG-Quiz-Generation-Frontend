import SidePanelBtn from "../components/SidePanelBtn";
import Title from "../components/Title";
import '../css/components.css'; 
import MultipleChoiceAnswer from "../components/MultipleChoiceAnswer";
import Question from "../components/Question";
import backUrl from "../assets/back.svg"; 
import nextUrl from "../assets/next.svg"
import ProgressBar from "../components/ProgressBar";
import ImageBtn from "../components/ImageBtn";


const Quizzes = () => {
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
                        <Question question="This is the first question now"/> 
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
                </div>
            </div>
        </div>
    )
}


export default Quizzes; 