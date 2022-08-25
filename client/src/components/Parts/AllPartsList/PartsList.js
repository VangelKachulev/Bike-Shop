import "./allPartsList.css";
import { PartsItem } from "../PartItem/PartsItem";
import { useContext, useState } from "react";
import { PartsContext } from "../../../contexts/PartsContext";

export const PartsList = () => {
    const { parts } = useContext(PartsContext);
    const [search, setSearch] = useState({
        searchBox: ""
    });

    const setQuery = e => {
        setSearch(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    let filteredParts = []
    if (parts) {
        filteredParts = parts.filter(part => {
            if (search.searchBox === "") {
                return part;
            } else {
                return part.type.toLowerCase().includes(search.searchBox.toLowerCase())

            }
        })
    } else {
        filteredParts = [];
    }
    return (
        <div className="AllPartsMainDiv">

            <div>
                <h1 className="AllListedParts">ALL LISTED BIKE PARTS</h1>
                <div className="SearchBox">
                        <input className="SearchInput" placeholder="Search..." name="searchBox" onChange={setQuery} />

                    </div>
                {filteredParts.length > 0
                    ? filteredParts.map(part => <PartsItem key={part._id} data={part}></PartsItem>)
                    : <h1 className="NoPartsToShow">Nothing to show</h1>}
            </div>

        </div >
    )
}



