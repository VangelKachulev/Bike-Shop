import { Link } from "react-router-dom";
import "./partsItem.css";

export const PartsItem = ({ data }) => {
    
    return (
        <div className="PartDiv">

            <ul className="ListItem">

                <div className="PartImageDiv">
                    <img className="CovePartImage" src={data.imageUrl} />
                </div>
                <div className="PartsInfo">
                    <h2>{data.type}</h2>
                    <h3 className="FrameSize">{data.brand}</h3>
                    <h3 className="Price">${data.price}</h3>

                    <Link to={`/parts/${data._id}`} className="MoreInfoBtn" >More info</Link>

                </div>
            </ul>
        </div >
    )
}