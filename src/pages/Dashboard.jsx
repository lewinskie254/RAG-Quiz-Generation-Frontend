import '../css/components.css'
import SidePanelBtn from '../components/SidePanelBtn';
import Title from '../components/Title';


const Dashboard = () => {
    return (
        <div className="container">
            <div className="dashboard">
                <aside className="panel">
                    <ul className="side-panel">
                        <Title title="Event Planners Alliance"/>
                        <SidePanelBtn title="Dashboard"/>
                        <SidePanelBtn title="Quizzes"/>
                        <SidePanelBtn title="Field Placement"/>
                        <SidePanelBtn title="Profile"/>
                    </ul>
                </aside>
            </div>
        </div>
    )
}

export default Dashboard; 