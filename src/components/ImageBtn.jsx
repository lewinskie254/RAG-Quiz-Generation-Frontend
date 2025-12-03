import { Link } from "react-router";

const ImageBtn = ({onClick, imgUrl}) => {
    return (
        <button onClick={onClick} className="image-btn">
            <img src={imgUrl} /> 
        </button>
    )
}

export default ImageBtn; 