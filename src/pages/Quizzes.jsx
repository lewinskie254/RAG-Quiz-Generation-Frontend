import SidePanelBtn from "../components/SidePanelBtn";
import Title from "../components/Title";
import '../css/components.css'; 

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
                        <div className="question-card">
                            <h2 className="question-title">Question</h2>
                            This is the sample of how the question will look like. 
                            let's see how the question looks like when there isn an overflow of the content being asked. 
                        </div>
                        <div className="answer-card">
                            <h2 className="answer-title">Answers</h2>
                            <div className="multiple-choice-answers">
                                <label class="check-container">
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                    Accept terms
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Quizzes; 