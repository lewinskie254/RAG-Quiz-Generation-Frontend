import SidePanelBtn from "../components/SidePanelBtn";
import Title from "../components/Title";
import '../css/components.css'; 
import AdminQuestionAndAnswer from "../components/AdminQuestionAndAnswer.Jsx";
import axios from "axios";
import { useEffect, useState} from "react";


const AdminQuizView = () => {

    const [questions, setQuestions] = useState([]); 

    useEffect(() => { 
        const fetchData = async () => {
            await fetchQuiz(); 
            console.log("Fetching data complete."); 
        }
        fetchData(); 
    }, []);

    const fetchQuiz = async () => {
        try{
           const response = await axios.get('http://127.0.0.1:8000/api/quiz/show-all-questions-per-quiz/462f7ad9-5165-4b29-bfd4-6f375a22001c/');
           const questions = response.data.questions; 
            setQuestions(questions); 
        } catch (e) {
            console.log(e)
        }
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
                <div className="admin-quiz-view">
                {questions.map((question, index) => {
                    return <AdminQuestionAndAnswer key={index} question={question} />;
                })}
                </div>
            </div>
        </div>
    )
}


export default AdminQuizView; 