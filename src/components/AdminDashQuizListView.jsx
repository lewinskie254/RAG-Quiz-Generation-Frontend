import { Link } from "react-router-dom";

const AdminDashQuizListView = (props) => {
    return (
        <Link to={props.nextLink} className='a-tag'>
            <div className="card-scroll-view">
                <div className="dash-quiz-view">
                    <p className="list-tile-tile">{props.title}</p>
                    <p className='list-tile-contents'>{props.unitName}</p>
                </div>
            </div>
        </Link>
    )
}

export default AdminDashQuizListView;
