import { Link } from "react-router-dom";

const SidePanelBtn = ({ title, to }) => {
    return (
        <li className="side-panel-button">
            <Link to={to} className="side-panel-a-btn">
                {title}
            </Link>
        </li>
    );
};

export default SidePanelBtn;