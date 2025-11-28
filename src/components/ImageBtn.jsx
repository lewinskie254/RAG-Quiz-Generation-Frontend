import { Link } from "react-router";

const ImageBtn = (props) => {
    return (
        <button onClick={props.onClick} className="image-btn">
            <img src={props.imgUrl} /> 
        </button>
    )
}

export default ImageBtn; 