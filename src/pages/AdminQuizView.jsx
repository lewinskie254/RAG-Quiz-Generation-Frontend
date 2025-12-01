import SidePanelBtn from "../components/SidePanelBtn";
import Title from "../components/Title";
import '../css/components.css'; 
import axios from "../api/axios";
import { useEffect, useState} from "react";
import { useParams } from "react-router";


const AdminQuizView = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([]); 
    const [units, setUnits] = useState([]);
    const [quizDetails, setQuizDetails] = useState({})
    const [quizDetailsLoaded, setQuizDetailsLoaded] = useState(false) 
    const [pageTitle, setPageTitle] = useState("");

    useEffect(() => { 
        const fetchData = async () => {
            await fetchQuiz(); 
            await fetchAllUnits();
            await fetchQuizDetails(); 
            console.log("Fetching data complete."); 
        }
        fetchData(); 
    }, []);

    const fetchQuiz = async () => {
        try{
           const response = await axios.get(`/quiz/show-all-questions-per-quiz/${quizId}/`);
           const questions = response.data.questions; 
            setQuestions(questions); 
        } catch (e) {
            console.log(e)
        }
    }

    const fetchQuizDetails = async () => {
        try {
            const response = await axios.get(`/quiz/show-specific-quiz/${quizId}/`)
            setQuizDetails(response.data.quiz); 
            setQuizDetailsLoaded(true)
            console.log("Quiz Details", response.data.quiz)
        } catch (err) {
            console.error(err); 
        }
    }

    const fetchAllUnits = async() => {
        try {
            const response = await axios.get(`/unit/show-all-units/`)
            setUnits(response.data.units); 
            console.log(response.data.units)
        }catch (e) {
            console.log(`error fetching units ${e}`)
        }
    }

    useEffect(() => {
        unitNameForQuiz();
    }, [quizDetailsLoaded, units])

    const unitNameForQuiz = () => {
        const unit = units.find((u) => u.id === quizDetails.unit);

        if (unit) {
            setPageTitle(unit.name);
        } else {
            setPageTitle("Unit not Found");
        }
    };

    return (
        <div className="container">
            <div className="quiz">
                <aside className="quiz-panel">
                    <ul className="quiz-side-panel">
                        <Title title="Quizzes"/>
                                   <hr className='quiz-side-panel-underline'/>
                        {
                            units.map((unit, index) => {
                                return (
                                    <SidePanelBtn 
                                        key={index} 
                                        title={unit.name} 
                                        active={unit.name === pageTitle}
                                        to={`/admin-quiz-management/${unit.id}/`} 
                                    />
                                );
                            })
                        }
                    </ul>
                </aside>
                <div className="admin-quiz-view">
                {
                    quizDetailsLoaded && (
                        <h1 className="unit-name">{`UNIT: ${pageTitle}`}</h1>
                    )
                }
                {questions.map((question, index) => {
                    return <AdminQuestionAndAnswer key={index} question={question} />;
                })}
                </div>
            </div>
        </div>
    )
}


export default AdminQuizView; 