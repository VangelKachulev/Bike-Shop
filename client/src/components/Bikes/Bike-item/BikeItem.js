import { Link } from "react-router-dom";
import "./bikeItem.css";

export const BikeItem = ({
    data,

}) => {

    return (
        <div key={data._id} className="BikeDiv">
            <div className="ListItem">

                <div className="ImageDiv">
                    <img className='CoverIt' src={data.imageUrl} />
                </div>

                <div className="Data">
                    <h2>{data.brand}</h2>
                    <h3 className="FrameSize">Frame size:{data.frame}</h3>
                    <h3 className="Price">${data.price}</h3>
                    <Link to={`/bikes/${data._id}`} className="Button" >More info</Link>
                </div>
            </div>
        </div >
    )




}








