import Button from '../components/CoolButton.jsx'; 
import { useNavigate } from 'react-router';
import Teacher from "../assets/teacher.png";
import Student from "../assets/student.png"; 

export default function Registration() {
    const navigate = useNavigate()


    return (
    <div className="container">
      <div className="register-page">
        <div className="teacher-div">
            <div className="register-as-teacher">
                <img src={Teacher}/>
                <Button name="Register as teacher" inverse={true} onClick = {() =>  navigate('/register-teacher')}/>
            </div>
        </div>
        <div className="student-div">
           <div className="register-as-student">
                <img src={Student}/>
                <Button name="Register as Student" onClick ={() =>  navigate('/register-student')}/>
            </div>
        </div>
      </div>
    </div>
    ); 
}
