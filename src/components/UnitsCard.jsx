import { Link } from "react-router";



const UnitsCard = (props) => {
    return (
        <Link to ={props.to} className="unit-card-link">
            <div className="card-scroll-view">
                <div className="scroll-view-list-tile">
                    <p className="list-tile-tile">
                        {props.title}
                    </p>
                    <p className='list-tile-contents'>{props.unitName}</p>
                </div>
            </div>
        </Link>
    )
}

export default UnitsCard; 