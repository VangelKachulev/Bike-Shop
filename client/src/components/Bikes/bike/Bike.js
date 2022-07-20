import { Link } from "react-router-dom"
import "./bike.css"


export const Bike = ({
    data,
    onDetailsClick,
}) => {

    return (
        <div className="bikeDiv">

            <ul className="listItem">

                <div className="imageDiv">
                    <img src={data.imageUrl} alt="Not found!" />
                </div>
                <div className="data">
                    <h2>{data.brand}</h2>
                    <h3 className="frameSize">Frame size:{data.frame}</h3>
                    <h3 className="price">{data.price}</h3>

                    <Link to={`/bikes/${data._id}`} className="button" onClick={() => onDetailsClick(data)}>More info</Link>

                </div>
            </ul>
        </div >
    )




}








