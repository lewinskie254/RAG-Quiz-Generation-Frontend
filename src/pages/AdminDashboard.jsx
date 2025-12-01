import '../css/components.css'
import SidePanelBtn from '../components/SidePanelBtn';
import Title from '../components/Title';
import AdminDashListView from '../components/AdminDashListView';
import Button from "../components/Button.jsx"
import Modal from '../components/Modal';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';


const AdminDashboard = () => {
    const {adminId} = useParams()
    const [modalVisible, setModalVisible] = useState(false); 
    const [quizzes, setQuizzes] = useState([]); 
    const [units, setUnits] = useState([]); 
    const [courses, setCourses] = useState([]); 
    const [teacherDetails, setTeacherDetails] = useState({})
    const [student, setStudents] = useState([]); 
    const showModal = () => setModalVisible(true);

    useEffect(()=> {
       const fetchData =  async ()=> {
        await fetchQuizzes(); 
        await fetchUnits(); 
        await fetchCourses(); 
        await fetchAllStudents(); 
        await fetchAdminDetails(); 
       }
    fetchData(); 
    }, [])
    
    const fetchQuizzes = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/quiz/show-all-quizzes-by-teacher/${adminId}`)
            setQuizzes(response.data.quizzes); 
            console.log("Quizzes", response.data)
        } catch (err) {
            console.error(err)
        }
    }

    const fetchUnits = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/unit/show-units-by-teacher/${adminId}`)
            setUnits(response.data.units); 
            console.log("Units", response.data)
        } catch(err) {
            console.error(err)
        }
    }

    const fetchCourses = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/course/show-all-courses/")
            setCourses(response.data.courses); 
            console.log("Courses", response.data)
        } catch (err) {
            console.error(err)
        }
    }

    const showByUnitName = (id) => {
        const unit = units.find((unit) => unit.id === id);
        if (!unit) return null;
        return unit ? unit.name : null;
    }

    const fetchAllStudents = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/student/show-all-students-by-school/${teacherDetails.school}/`)
            console.log("students", response.data)
            setStudents(response.data.students)
        } catch (err){
            console.log(err); 
        }
    }

    const fetchAdminDetails = async () => {
        try{
            const response = await axios.get(`http://127.0.0.1:8000/api/teacher/show-specific-teacher/${adminId}`)
            setTeacherDetails(response.data.teacher)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="container">
            <div className="dashboard">
                <aside className="panel">
                    <ul className="side-panel">
                        <Title title="Event Planners Alliance"/>
                        <hr className='side-panel-underline'/>
                        <SidePanelBtn title="My Students"/>
                        <SidePanelBtn title="Profile"/>
                    </ul>
                </aside>

                <div className="admin-dashboard-content">
                    <div className="quiz-generator">
                        <Button name="Generate Quiz" onClick={showModal} />
                    </div>
                    {modalVisible && (
                        <Modal visible={modalVisible} onClose={() => setModalVisible(false)} />
                    )}
                <div className="admin-cards">
                         <div className="admin-dash-card">
                    <h1 className='blue card-heading'>My Quizzes</h1>
                    <div className="admin-scroll-view">
                        {
                            quizzes.map((quiz, index) => (
                                <AdminDashListView key={index} title={quiz.id} unitName={showByUnitName(quiz.unit)} nextLink = {`/admin-quiz/${quiz.id}`}/>
                            ))
                        }
                    </div>
                  </div>
                   <div className="admin-dash-card">
                    <h1 className='blue card-heading'>My Students</h1>
                    <div className="admin-scroll-view">
                        {
                            student.map((student, index) => (
                                <AdminDashListView key = {index} title={`Grade : ${student.grade}`} unitName={student.name} />
                            ))
                        }
                    </div>
                  </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard; 