const SidePanelBtn = (props) => {
    return (
        <div>
            <li className="side-panel-button">
                <a href={props.href} className="side-panel-a-btn">{props.title}</a>
            </li>
        </div>
    )
}

export default SidePanelBtn; 

