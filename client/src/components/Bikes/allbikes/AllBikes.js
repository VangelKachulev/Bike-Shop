import "./allBikes.css"
import { useEffect, useState } from 'react';
import { Bike } from "../bike/Bike";
import * as bikeService from "../../../services/BikeService"
import { useParams } from "react-router-dom";
import { Details } from "../details/Details";


export const AllBikes = () => {



    const [bikes, setBikes] = useState([]);
    const [bikeInfo, setBikebikeInfo] = useState(null)


    useEffect(() => {
        bikeService.getAll()
            .then(data => setBikes(Object.values(data)));
    }, [])


    const showDetails = (data) => {
        fetch(`http://localhost:3030/jsonstore/bikes/${data._id}`)
            .then(res => res.json())
            .then(result => {
                setBikebikeInfo(result);

            })


    }

    console.log(bikeInfo);



    return (<div >

        {/* {bikeInfo && <Deta} */}

        {
            bikes.length > 0
                ? bikes.map(bike => <Bike onDetailsClicl={showDetails} key={bike._id} data={bike}></Bike>)
                : <h1>no bikes</h1>
        }



    </div>)




}
