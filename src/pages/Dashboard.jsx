import '../css/components.css'
import SidePanelBtn from '../components/SidePanelBtn';
import Title from '../components/Title';
import ProgressCard from '../components/ProgressCard';

const Dashboard = () => {
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
                        currentScore="2"
                        outOfTerm = "Over"
                        totalScore = "12"
                        description = "Units Covered"
                  /> 
                  <ProgressCard 
                        currentScore="49"
                        outOfTerm = "Over"
                        totalScore = "80"
                        description = "Quiz Scores"
                  /> 
                  <div className="card">
                        <h1>card 3</h1>
                  </div>
                  <div className="card">
                        <h1>card 4</h1>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard; 