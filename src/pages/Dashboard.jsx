import '../css/components.css'
import SidePanelBtn from '../components/SidePanelBtn';
import Title from '../components/Title';
import ProgressCard from '../components/ProgressCard';
import UnitsCard from '../components/UnitsCard';


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
                    <h1 className='blue card-heading'>Units Covered</h1>
                    <div className="scroll-view">
                        <UnitsCard title="Unit 5" unitName="Vendor Coordination and Contracts" />
                        <UnitsCard title="Unit 6" unitName="Event Design and Theming" />
                        <UnitsCard title="Unit 7" unitName="Risk Management and Compliance" />
                        <UnitsCard title="Unit 8" unitName="Event Execution and Evaluation" />
                    </div>
                  </div>
                   <div className="card">
                    <h1 className='blue card-heading'>Quizzes Completed</h1>
                    <div className="scroll-view">
                        <UnitsCard title="Unit 1" unitName="Introduction to Event Management" />
                        <UnitsCard title="Unit 2" unitName="Client Needs Assessment" />
                        <UnitsCard title="Unit 3" unitName="Budgeting and Cost Control" />
                        <UnitsCard title="Unit 4" unitName="Venue Selection and Logistics" />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard; 