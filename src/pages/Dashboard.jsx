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
                        <hr className='side-panel-underline'/>
                        <SidePanelBtn title="Dashboard"/>
                        <SidePanelBtn title="Quizzes"/>
                        <SidePanelBtn title="Field Placement"/>
                        <SidePanelBtn title="Profile"/>
                    </ul>
                </aside>
                <div className="dashboard-content">
                  <div className="card">
                    <div className="card-content">
                        <div className="score-tab">
                            <h1 className='score-heading'>20</h1>
                            <p className='score-paragraph'>Over <span className='out-of-tag'> 50</span> </p>
                        </div>
                        <div className="score-description">
                            <h2 className='score-description-title'>Units Completed</h2>
                        </div>
                    </div>
                    <div className="progress-bar">

                    </div>
                  </div>
                  <div className="card">
                        <h1>card 2</h1>
                  </div>
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