import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import * as partService from '../../../services/PartsService';
import "./partDetails.css";

import { AuthContext } from '../../../contexts/AuthContext';
import { PartsContext, PartsProvider } from '../../../contexts/PartsContext';

export const PartDetails = () => {

    const navigate = useNavigate();
    const { userData } = useContext(AuthContext);
    const { emptyPartsState } = useContext(PartsContext);
    const [partInfo, setPartInfo] = useState({});
    const { id } = useParams();
    const token = userData.accessToken;
    useEffect(() => {
        partService.getOne(id)
            .then(data => setPartInfo(data));

    }, []);

    const deletPartAd = () => {
        const confirmation = window.confirm('Are you sure you want to delete this ad?');
        if (confirmation) {

            partService.removeAd(token, partInfo._id);
            emptyPartsState(partInfo._id);
            navigate('/myAds');
        }
    };


    return (
        <div className='MainPartSection'>
            <div className='PartImageContainer'>
                <img className='ContainerImage' src={partInfo.imageUrl} alt={`Not found`}></img>

            </div>
            <div className='PartTextContainter'>

                <h1 className='BrandNamePart'>{partInfo.brand}</h1>
                <h2>{partInfo.type}</h2>
                <h2>Price: ${partInfo.price}</h2>

                <h4 >Description :</h4>
                <p className='DescriptionPart'>{partInfo.description}</p>
                <h3> Owner's phone: {partInfo.phone}</h3>

                {(userData._id === partInfo._ownerId)
                    && <div>
                        <Link to={`/parts/${partInfo._id}/edit`} state={{ partInfo: partInfo }} className='PartOptionButtons'>EDIT </Link>
                        <button onClick={deletPartAd} className='PartOptionButtons'>DELETE</button>

                    </div>
                }
            </div>
        </div >
    )
}








