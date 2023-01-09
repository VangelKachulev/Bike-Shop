import { Link } from "react-router-dom";
import "./partsItem.css";

export const PartsItem = ({ data }) => {

    return (
        <div className="single-part-main">

            <div className="part-image-containter">
                <img src={data.imageUrl} />
            </div>

            <h2>{data.type}</h2>
            <h3 >{data.brand}</h3>
            <h3 >${data.price}</h3>

            <Link to={`/parts/${data._id}`} className="more-infot-btn" >More info</Link>
        </div >
    )
}