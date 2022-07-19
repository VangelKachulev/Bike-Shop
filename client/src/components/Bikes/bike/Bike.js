import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Details } from "../details/Details";
import "./bike.css"


export const Bike = ({
    data,
    onDetailsClicl,
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

                    <button onClick={()=>onDetailsClicl(data)}>More info</button>

                </div>
            </ul>
        </div >
    )




}








