import { useContext } from "react";
import { BikeContext } from "../../contexts/BikeContext";
import { AuthContext } from "../../contexts/AuthContext";
import { BikeItem } from "../Bikes/Bike-item/BikeItem";
import { PartsItem } from "../Parts/PartItem/PartsItem";
import styles from './myads.module.css';
import { PartsContext } from "../../contexts/PartsContext";

export const MyAds = () => {
    const { bikes } = useContext(BikeContext);
    const { parts } = useContext(PartsContext);

    const { userData } = useContext(AuthContext);

    const myBikes = bikes.filter(x => x._ownerId === userData._id);
    const myParts = parts.filter(x => x._ownerId === userData._id);

    return (<div className={styles.MyAds}>

        {(myBikes.length > 0 || myParts.length)

            && <div>
                < h1 className={styles.MyActiveAds}>My active ads</h1>
                <div className={styles.MyItemsSection}>
                    {myBikes.map(x => <BikeItem key={x._id} data={x}></BikeItem>)}
                    {myParts.map(x => <PartsItem key={x._id} data={x}></PartsItem>)}
                </div>
            </div>

            || <div>
                (<h1 className={styles.MyActiveAds}>You don't have any active ads</h1>)

            </div>}
    </div >)
}