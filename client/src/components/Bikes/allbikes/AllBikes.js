import "./allBikes.css"
import { useEffect, useState } from 'react';
import { Bike } from "../bike/Bike";
import * as bikeService from "../../../services/BikeService"



export const AllBikes = () => {

    const [bikes, setBikes] = useState([]);
    // const [bikeInfo, setBikebikeInfo] = useState(null)

    useEffect(() => {
        bikeService.getAll()
            .then(data => setBikes(Object.values(data)));
    }, [])

    // const showDetails = (data) => {
    //     bikeService.getOne(data._id)
    //         .then(data => setBikebikeInfo(data))
    // }

    return (<div>
        {
            bikes.length > 0
                ? bikes.map(bike => <Bike key={bike._id} data={bike}></Bike>)
                : <h1>no bikes</h1>
        }
    </div>)
}




















