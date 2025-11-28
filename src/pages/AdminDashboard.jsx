import '../css/components.css'
import SidePanelBtn from '../components/SidePanelBtn';
import Title from '../components/Title';
import AdminDashListView from '../components/AdminDashListView';
import Button from '../components/button';
import Modal from '../components/Modal';
import { useState, useEffect } from 'react';
import axios from 'axios';


const AdminDashboard = () => {
    const [modalVisible, setModalVisible] = useState(false); 
    const [quizzes, setQuizzes] = useState([]); 
    const [units, setUnits] = useState([]); 
    const [courses, setCourses] = useState([]); 
    const [student, setStudents] = useState([]); 
    const showModal = () => setModalVisible(true);

    useEffect(()=> {
       const fetchData =  async ()=> {
        await fetchQuizzes(); 
        await fetchUnits(); 
        await fetchCourses(); 
        await fetchAllStudents(); 
       }
    fetchData(); 
    }, [])
    
    const fetchQuizzes = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/quiz/show-all-quizzes-by-teacher/ba836b7f-2f59-49c9-a0a7-c7e7feb13c96/")
            setQuizzes(response.data.quizzes); 
            console.log("Quizzes", response.data)
        } catch (err) {
            console.error(err)
        }
    }

    const fetchUnits = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/unit/show-all-units/")
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

    const showCourseByName = (id) => {
        const unit = units.find((unit) => unit.id === id);
        if (!unit) return null;

        const course = courses.find((course) => course.id === unit.course);
        console.log(course)
        return course ? course.name : null;
    }

    const fetchAllStudents = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/student/show-all-students-by-school/ee73aa34-0f26-46fe-92f1-85ba51435e01/')
            console.log("students", response.data)
            setStudents(response.data.students)
        } catch (err){
            console.log(err); 
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
                                <AdminDashListView key={index} title={quiz.id} unitName={showCourseByName(quiz.unit)} nextLink = {`/admin-quiz/${quiz.id}`}/>
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