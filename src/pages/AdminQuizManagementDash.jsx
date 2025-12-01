import { useContext, useEffect, useState } from 'react'; 
import { useParams } from 'react-router';
import Title from '../components/Title';
import SidePanelBtn from '../components/SidePanelBtn';
import AdminDashListView from '../components/AdminDashListView';
import axios from '../api/axios';
import AuthContext from '../context/AuthProvider';

export default function AdminQuizManagementDash() {
    const {unitId} = useParams()
    const { student_id, teacher_id, access, refresh, user } = useContext(AuthContext)
    const [quizzes, setQuizzes] = useState([]); 
    const [unit, setUnit] = useState({}); 

    useEffect(()=> {
        const fetchData = async() => {
            await fetchQuizzes(); 
            await fetchUnitDetails()
        }
        fetchData(); 
    }, [])

    const fetchQuizzes = async () => {
        try{
            const response = await axios.get(`/quiz/show-all-quizzes-per-unit/${unitId}/`)
            console.log(response.data)
            setQuizzes(response.data.quizzes); 
        }catch (e) {
            console.log(`Admin Quiz fetch quizzes error: ${e}`)
        }
    }

    const fetchUnitDetails = async() => {
        try{
            const response = await axios.get(`/unit/show-specific-unit/${unitId}/`)
            console.log(response.data)
            setUnit(response.data.unit) 
        }catch (e) {
            console.log(`Admin Quiz fetch unit error: ${e}`)
        }
    }

  return (
    <div className="container">
            <div className="dashboard">
                <aside className="panel">
                    <ul className="side-panel">
                        <Title title={unit.name}/>
                        <hr className='side-panel-underline'/>
                        <SidePanelBtn title="Dashboard" to={`/admin/${teacher_id}`}/>

                    </ul>
                </aside>
                <div className="admin-quiz-view-content">
                    <div className="admin-quiz-view-card">
                    <h1 className='blue card-heading'>My Quizzes</h1>
                    <div className="admin-quiz-scroll-view">
                        {
                            quizzes.map((quiz, index) => {
                                return (
                                    <AdminDashListView title={quiz.id} unitName={unit.name} nextLink={`/admin-quiz/${quiz.id}`} />
                                )
                            })
                        }
                    </div>
                  </div>
            
                </div>
            </div>
        </div>
  )
}
