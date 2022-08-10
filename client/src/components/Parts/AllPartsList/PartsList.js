import "./allPartsList.css";
import { PartsItem } from "../PartItem/PartsItem";
import { useContext } from "react";
import { PartsContext } from "../../../contexts/PartsContext";

export const PartsList = () => {
    const { parts } = useContext(PartsContext);
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



