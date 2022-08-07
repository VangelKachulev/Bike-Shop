import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import * as partService from '../../../services/PartsService';
import "./partDetails.css";

import { AuthContext } from '../../../contexts/AuthContext';

export const PartDetails = ({ emptyPartsState }) => {

    const navigate = useNavigate();
    const { userData } = useContext(AuthContext);

    const [partInfo, setPartInfo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        partService.getOne(id)
            .then(data => setPartInfo(data));

    }, []);

    const deletPartAd = () => {
        const token = userData.accessToken;
        partService.removeAd(token, partInfo._id);
        emptyPartsState(partInfo._id);
        navigate('/myAds');
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








