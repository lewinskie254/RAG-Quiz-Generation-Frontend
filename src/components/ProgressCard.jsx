import ProgressBar from "./ProgressBar";

const ProgressCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="score-tab">
                    <h1 className='score-heading'>{props.currentScore}</h1>
                    <p className='score-paragraph'>{props.outOfTerm}<span className='out-of-tag'> {props.totalScore}</span> </p>
                </div>
                <div className="score-description">
                    <h2 className='score-description-title'>{props.description}</h2>
                </div>
            </div>
            <ProgressBar progressWidth={props.progressWidth} progressAmount = {props.progressAmount} /> 
        </div>
    )
}

export default ProgressCard; 