import '../css/components.css'
import SidePanelBtn from '../components/SidePanelBtn';
import Title from '../components/Title';
import ProgressCard from '../components/ProgressCard';
import UnitsCard from '../components/UnitsCard';
import { useState } from 'react';
import { useParams } from 'react-router';
import axios from '../api/axios';
import { useEffect } from 'react';


const StudentDashboard = () => {
    const {studentId} = useParams()
    const [studentQuizzes, setStudentQuizzes] = useState([]); 
    const [studentUnits, setStudentUnits] = useState([]); 
    const [studentDetails, setStudentDetails] = useState({}); 

    
    useEffect(() => {
        const fetchData = async () =>{
            await fetchQuizzes(); 
            await fetchUnits(); 
            await fetchStudentDetails(); 
        }
        fetchData(); 
    }, []); 


    const fetchQuizzes = async () => {
        try{
            const response = await axios.get(`/quiz/show-all-quizzes-from-student-id/${studentId}`)
            setStudentQuizzes(response.data.quizzes); 
        } catch (err) {
            console.error(err)
        }
    }


    const fetchUnits = async () => {
        try {
            const response = await axios.get(`/student/show-all-units-for-student/${studentId}`)
            setStudentUnits(response.data.units); 
        } catch (err) {
            console.error(err); 
        }
    }

    const fetchStudentDetails = async () => {
        try {
            const response = await axios.get(`/student/show-student-details/${studentId}`)
            setStudentDetails(response.data.student); 
            console.log("Student details", response.data)
        } catch (err) {
            console.error(err)
        }
    }

    const getUnitName = (id) => {
        const unitToUse= studentUnits.find((unit) => unit.id === id)
        return unitToUse ? unitToUse.name : "No Unit Found"; 
    } 

    const getTotalQuizScore = () => {
        var score = 0; 
        for (var quiz of studentQuizzes) {
            score += quiz.number_of_questions; 
        }
        return score; 
    }

    return (
        <div className="container">
            <div className="dashboard">
                <aside className="panel">
                    <ul className="side-panel">
                        <Title title="Event Planners Alliance"/>
                        <hr className='side-panel-underline'/>
                        <SidePanelBtn title="Dashboard"/>
                        <SidePanelBtn title="Quizzes"/>
                        <SidePanelBtn title="Field Placement"/>
                        <SidePanelBtn title="Profile"/>
                    </ul>
                </aside>

                <div className="dashboard-content">
                  <ProgressCard 
                        currentScore="1"
                        outOfTerm = "Over"
                        totalScore = {studentQuizzes.length == 0 ? 7 : studentQuizzes.length}
                        description = "Quizzes Completed"
                  /> 
                  <ProgressCard 
                        currentScore={studentDetails.grade == 0 ? 1: studentDetails.grade}
                        outOfTerm = "Over"
                        totalScore = {`${getTotalQuizScore() == 0? 100 : getTotalQuizScore()}`}
                        description = "Quiz Scores"
                  /> 
                  <div className="card">
                    <h1 className='blue card-heading'>Pending Quizzes</h1>
                    <div className="scroll-view">
                        {
                            studentQuizzes.map((quiz, index)=> (
                                <UnitsCard key={index} title={quiz.id} unitName={`Quiz For: ${getUnitName(quiz.unit)}`} to={`/student-quiz/${quiz.id}`}/>
                            ))
                        }
                    </div>
                  </div>
                   <div className="card">
                    <h1 className='blue card-heading'>My Units</h1>
                    <div className="scroll-view">
                        {
                            studentUnits.map((unit, index)=> (
                                <UnitsCard key={index} title={unit.id} unitName={`Unit: ${unit.name}`}/>
                            ))
                        }
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard; 