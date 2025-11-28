import { Link } from "react-router-dom";

const SidePanelBtn = ({ title, to, active }) => {
    return (
        <li className={`side-panel-button ${active ? 'active-side-panel' : ""}`}>
            <Link to={to} className="side-panel-a-btn">
                {title}
            </Link>
        </li>
    );
};

export default SidePanelBtn;