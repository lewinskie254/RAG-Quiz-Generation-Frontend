import '../css/components.css'

import { Link } from "react-router-dom";

const AdminDashListView = (props) => {
    return (
        <Link to={props.nextLink} className='a-tag'>
            <div className="card-scroll-view dash-list-view">
                <div className="scroll-view-list-tile">
                    <p className="list-tile-tile">{props.title}</p>
                    <p className='list-tile-contents'>{props.unitName}</p>
                </div>
            </div>
        </Link>
    )
}

export default AdminDashListView;
