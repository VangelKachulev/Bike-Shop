import { Link } from "react-router-dom";
import "./bikeItem.css";

export const BikeItem = ({
    data,

}) => {

    return (
        <div key={data._id} className="bike-item-main">


            <div className="bike-image-container">
                <img className='CoverIt' src={data.imageUrl} />
            </div>


            <h2>{data.brand}</h2>
            <h3>Frame size:{data.frame}</h3>
            <h3>${data.price}</h3>
            <Link to={`/bikes/${data._id}`} className="button" >More info</Link>


        </div >
    )




}








