import SidePanelBtn from "../components/SidePanelBtn";
import Title from "../components/Title";
import '../css/components.css'; 
import AdminQuestionAndAnswer from "../components/AdminQuestionAndAnswer.Jsx";


const AdminQuizView = () => {
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
                <div className="admin-quiz-view">
                    <AdminQuestionAndAnswer/>
                    <AdminQuestionAndAnswer/>
                    <AdminQuestionAndAnswer/>
                    <AdminQuestionAndAnswer/>
                </div>
            </div>
        </div>
    )
}


export default AdminQuizView; 