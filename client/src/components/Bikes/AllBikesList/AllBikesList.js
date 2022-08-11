import "./allBikesList.css";
import { BikeItem } from "../Bike-item/BikeItem";
import { useContext } from "react";
import { BikeContext } from '../../../contexts/BikeContext';

export const AllBikesList = () => {

    const { bikes } = useContext(BikeContext);

    return (
        <div className="MainListBikes">

            <div className="InlineBlock">

                <div>
                    <div className="AllListedAdds">
                        <h1 className="Honebikes">ALL LISTED BIKES</h1>
                    </div>
                    {
                        bikes.length > 0
                            ? bikes.map(bike => <BikeItem key={bike._id} data={bike}></BikeItem>)
                            : <h1 className="NoBikesToShow">Nothing to show</h1>
                    }
                </div>
            </div>
        </div>

    )
}




















