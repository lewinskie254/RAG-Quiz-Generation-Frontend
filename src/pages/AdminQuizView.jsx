import SidePanelBtn from "../components/SidePanelBtn";
import Title from "../components/Title";
import '../css/components.css'; 
import AdminQuestionAndAnswer from "../components/AdminQuestionAndAnswer.Jsx";
import axios from "axios";
import { useEffect, useState} from "react";
import { useParams } from "react-router";


const AdminQuizView = (props) => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([]); 
    const [units, setUnits] = useState([]);

    useEffect(() => { 
        const fetchData = async () => {
            await fetchQuiz(); 
            await fetchAllUnits();
            console.log("Fetching data complete."); 
        }
        fetchData(); 
    }, []);

    const fetchQuiz = async () => {
        try{
           const response = await axios.get(`http://127.0.0.1:8000/api/quiz/show-all-questions-per-quiz/${quizId}/`);
           const questions = response.data.questions; 
            setQuestions(questions); 
        } catch (e) {
            console.log(e)
        }
    }

    const fetchAllUnits = async() => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/unit/show-all-units`)
            const units = response.data; 
            setUnits(response.data.units); 
            console.log(response.data); 
        }catch (e) {
            console.log(`error fetching units ${e}`)
        }
    }

    return (
        <div className="container">
            <div className="quiz">
                <aside className="quiz-panel">
                    <ul className="quiz-side-panel">
                        <Title title="Quizzes"/>
                        <hr className='quiz-side-panel-underline'/>
                        {
                            units.map((unit, index) => {
                                console.log(unit);
                                return (
                                    <SidePanelBtn 
                                        key={index} 
                                        title={unit.name} 
                                        to={`/admin-quiz-management/${unit.id}/`} 
                                    />
                                );
                            })
                        }
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