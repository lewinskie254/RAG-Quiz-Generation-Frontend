const ImageBtn = (props) => {
    return (
        <a href={props.href} className="image-btn">
            <img src={props.imgUrl} /> 
        </a>
    )
}

export default ImageBtn; 