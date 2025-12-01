import React from 'react'
import ReactDom from 'react-dom'
import Button from './CoolButton.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from '../api/axios.jsx';

export default function Modal(props) {

    const teacherId = props.id; 

    var visible = props.visible; 

    if (!visible) return null; 


    const [courses, setCourses] = useState([]); 
    const [myUnits, setMyUnits] =useState([]); 
    const [loadedUnits, setLoadedUnits] = useState(false);
    const [quizGenerated, setGeneratedQuiz] = useState(false); 
    const [selectedCourse, setSelectedCourse] = useState("")
    const [success, setSuccess] = useState(""); 
    const [loading, setLoading] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState("")
    const [generatedQuizId, setGeneratedQuizId] = useState(""); 


    const navigate = useNavigate()
    
    useEffect(() => {
        const fetchData =async()=> {
            await fetchCourses(); 
        }
        fetchData()
        }, []
    )

    const fetchCourses = async () => {
        try{
            const response = await axios.get('/course/show-all-courses/')
            setCourses(response.data.courses)
        }catch (e) {
            console.log(`Error: ${e}`)
        }
    }

    const handleUnitFetch = async (e) => {
        const courseId = e.target.value;
        setSelectedCourse(courseId);
        await fetchUnits(courseId);
    };


    const fetchUnits = async (courseId) => {
        try {
            const response = await axios.get(
                `/unit/show-units-by-course/${courseId}`
            );
            console.log(response.data); 
            setMyUnits(response.data.units);
            setLoadedUnits(true);
        } catch (err) {
            console.log(`error: ${err}`);
        }
    };


    const generateQuiz = async () => {
        setLoading(true); 
        try {
            console.log(`selected unit: ${selectedUnit}`)
            const response = await axios.get(
                `/quiz/generate-quiz/${teacherId}/${selectedUnit}`
            );
            setGeneratedQuiz(true); 
            setGeneratedQuizId(response.data.quiz); 
            setSelectedCourse("")
            setSelectedUnit("")
            setSuccess(response.data.message)
        } catch (e) {
            setSuccess(e)
        } finally {
            setLoading(false); // hide loading
        }
    }


    const viewQuiz = () => {
        navigate(`/admin-quiz/${generatedQuizId}`)
    }

    const tryAgain = () => {
        setLoadedUnits(false);
        setGeneratedQuiz(false);
        setSelectedCourse("");
        setSuccess("");
        setLoading(false);
        setSelectedUnit("");
        setGeneratedQuizId("");
    }


  return ReactDom.createPortal(
    <div>
        <div className="overlay">

        </div>
        
        <div className="modal">
            <Button name="Close" onClick={props.onClose} />
            {loading && (
                    <div className="loading-overlay">
                        <div className="spinner"></div>
                    </div>
            )}

            {
                quizGenerated ? (
                    <div className="go-to-quiz">
                        
                            {
                                success === 'Created Successfully' ? 
                                <div className="success-message-box">
                                    <h2>Quiz Generated Successfully </h2> 
                                    <Button name="View Quiz" onClick={viewQuiz}/>
                                </div>
                            : <div className="error-message-box">
                                <h2>Error Generating Your Quiz </h2> 
                                    <Button name="Try Again" onClick={tryAgain}/>
                                </div>
                            }
                             
                        
                    </div>
                ) : (
                    <form onSubmit={(e) => e.preventDefault()}>
                    {/* add courses  */}
                    <select id="modal-form-course" onChange={handleUnitFetch}>
                        <option value="">Select Course</option>
                        {courses.map((course) => (
                            <option key={course.id} value={course.id}>
                                {course.name}
                            </option>
                        ))}
                    </select>

                    {/* add units */}
                    {loadedUnits && (
                        <select id="modal-form-unit" onChange={(e) => setSelectedUnit(e.target.value)}>
                            <option value="">Select Unit</option>
                            {myUnits.map((unit) => (
                                <option value={unit.id} key={unit.id}>
                                    {unit.name}
                                </option>
                            ))}
                        </select>
                    )}
                
                    <Button name="Generate Quiz" onClick={generateQuiz}/>

                </form>
                )
            }
        </div>
    </div>, 
    document.getElementById('portal')
  )
}
