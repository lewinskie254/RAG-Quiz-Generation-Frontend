import '../css/components.css'
import SidePanelBtn from '../components/SidePanelBtn';
import Title from '../components/Title';
import AdminDashListView from '../components/AdminDashListView';


const AdminDashboard = () => {
    return (
        <div className="container">
            <div className="dashboard">
                <aside className="panel">
                    <ul className="side-panel">
                        <Title title="Event Planners Alliance"/>
                        <hr className='side-panel-underline'/>
                        <SidePanelBtn title="Dashboard"/>
                        <SidePanelBtn title="Quizzes"/>
                        <SidePanelBtn title="My Students"/>
                        <SidePanelBtn title="Profile"/>
                    </ul>
                </aside>

                <div className="admin-dashboard-content">
                  <div className="admin-dash-card">
                    <h1 className='blue card-heading'>My Quizzes</h1>
                    <div className="admin-scroll-view">
                        <AdminDashListView title="Quiz 5" unitName="Vendor Coordination and Contracts" />
                        <AdminDashListView title="Quiz 6" unitName="Event Design and Theming" />
                        <AdminDashListView title="Quiz 7" unitName="Risk Management and Compliance" />
                        <AdminDashListView title="Quiz 8" unitName="Event Execution and Evaluation" />
                        <AdminDashListView title="Quiz 8" unitName="Event Execution and Evaluation" />
                        <AdminDashListView title="Quiz 8" unitName="Event Execution and Evaluation" />
                    </div>
                  </div>
                   <div className="admin-dash-card">
                    <h1 className='blue card-heading'>My Students</h1>
                    <div className="admin-scroll-view">
                        <AdminDashListView title="Grade : 20" unitName="James Kamau" />
                        <AdminDashListView title="Grade : 25" unitName="Nancy Njoroge" />
                        <AdminDashListView title="Grade : 45" unitName="Everylene Kamau" />
                        <AdminDashListView title="Grade : 65" unitName="Justice Oliech" />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard; 