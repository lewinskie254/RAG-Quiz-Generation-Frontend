const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <div className="progress-fill" style={{ width: props.progressWidth }}></div>
            <span className='progress-details' style={{ width: props.progressWidth }}>
                <p>{props.progressAmount}</p>
            </span>
        </div>
    )
}

export default ProgressBar;
