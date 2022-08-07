import "./allPartsList.css";
import { PartsItem } from "../PartItem/PartsItem";

export const PartsList = ({ parts }) => {

    return (
        <div className="AllPartsMainDiv">

            <div>
                <h1 className="AllListedParts">ALL LISTED BIKE PARTS</h1>
                {parts.length > 0
                    ? parts.map(part => <PartsItem key={part._id} data={part}></PartsItem>)
                    : <h1 className="NoPartsToShow">Nothing to show</h1>}
            </div>

        </div >
    )
}



