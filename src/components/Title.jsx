
const Title = (props) => {
    return (
        <div className={"title-wrapper"}>
            <h1 className={`title-text ${props.class}`}>{props.title}</h1>
        </div>
    )
}

export default Title; 