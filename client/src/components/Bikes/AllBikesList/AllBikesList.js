import "./allBikesList.css";
import { BikeItem } from "../Bike-item/BikeItem";
import { useContext, useState } from "react";
import { BikeContext } from '../../../contexts/BikeContext';

export const AllBikesList = () => {

    const { bikes } = useContext(BikeContext);
    const [search, setSearch] = useState({
        searchBox: ""
    });

    const setQuery = e => {
        setSearch(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    let filteredBikes = bikes.filter(bike => {
        if (search.searchBox === "") {
            return bike;
        } else {
            return bike.brand.toLowerCase().includes(search.searchBox.toLowerCase())

        }
    })


    return (
        <div className="MainListBikes">
            <div className="InlineBlock">

                <div>
                    <div className="AllListedAdds">
                        <h1 className="Honebikes">ALL LISTED BIKES</h1>
                    </div>
                    <div className="SearchBox">
                        <input className="SearchInput" placeholder="Search..." name="searchBox" onChange={setQuery} />

                    </div>
                    {
                        filteredBikes.length > 0
                            ? filteredBikes.map(bike => <BikeItem key={bike._id} data={bike}></BikeItem>)
                            : <h1 className="NoBikesToShow">Nothing to show</h1>
                    }
                </div>
            </div>
        </div>

    )
}




















