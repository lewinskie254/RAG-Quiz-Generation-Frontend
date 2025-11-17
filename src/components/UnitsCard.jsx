const UnitsCard = (props) => {
    return (
        <div className="card-scroll-view">
            <div className="scroll-view-list-tile">
                <p className="list-tile-tile">
                    {props.title}
                </p>
                <p className='list-tile-contents'>{props.unitName}</p>
            </div>
        </div>
    )
}

export default UnitsCard; 