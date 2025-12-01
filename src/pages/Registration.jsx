import Button from '../components/CoolButton.jsx'; 
import { useNavigate } from 'react-router';

export default function Registration() {
    const navigate = useNavigate()


    return (
    <div className="container">
      <div className="register">
        <div className="input-div">
            <div className="register-as-teacher">
                <img src="src/assets/teacher.png"/>
                <Button name="Register as teacher" inverse={true} onClick = {() =>  navigate('/register-teacher')}/>
            </div>
        </div>
        <div className="logo-div">
           <div className="register-as-student">
                <img src="src/assets/student.png"/>
                <Button name="Register as Student" onClick ={() =>  navigate('/register-student')}/>
            </div>
        </div>
      </div>
    </div>
    ); 
}
