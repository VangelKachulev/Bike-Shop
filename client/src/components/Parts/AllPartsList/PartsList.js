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
        <div className="parts-main">


            <h1 className="all-listed-parts">ALL LISTED BIKE PARTS</h1>
            <div className="parts-search-box">
                <input placeholder="Search..." name="searchBox" onChange={setQuery} />

            </div>
            <div className="parts-list">
                {filteredParts.length > 0
                    ? filteredParts.map(part => <PartsItem key={part._id} data={part}></PartsItem>)
                    : <h1 className="no-parts">Nothing to show</h1>}
            </div>



        </div >
    )
}



