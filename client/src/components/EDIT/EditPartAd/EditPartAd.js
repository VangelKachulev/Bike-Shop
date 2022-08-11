import { useLocation, useNavigate } from "react-router-dom";
import './editPartAd.css'
import * as PartService from '../../../services/PartsService';
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { PartsContext } from "../../../contexts/PartsContext";

export const EditPartAd = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const { token } = useContext(AuthContext);
    const { editPartState } = useContext(PartsContext);
    
    const { partInfo } = location.state;
    const [partData, setPartData] = useState({
        type: partInfo.type,
        brand: partInfo.brand,
        imageUrl: partInfo.imageUrl,
        price: partInfo.price,
        description: partInfo.description,
        phone: partInfo.phone,
    });
    const onChangeHandler = (e) => {
        setPartData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const updateInfo = (e) => {
        e.preventDefault();

        PartService.update(token, partData, partInfo._id)
            .then(result => {

                editPartState(result._id, result);
                navigate(`/parts/${result._id}`);
            })
    };

    return ((<div className='EditPart'>

        <form onSubmit={updateInfo} className="EditPartForm" >
            <h2 className='EditPartLabel'>EDIT AD</h2>

            <div >
                <div className='EditPartSect' >
                    <label htmlFor="type"><b>Type</b></label>
                    <input
                        id='type'
                        name='type'
                        className="PartInputs"
                        type="text"
                        required
                        value={partData.type}
                        onChange={onChangeHandler}
                    />
                </div>

                <div className='EditPartSect'>
                    <label htmlFor="brand"><b>Brand</b></label>
                    <input
                        id='brand'
                        className="PartInputs"
                        type="text"
                        name="brand"
                        required
                        value={partData.brand}
                        onChange={onChangeHandler}
                    />
                </div>

                <div className='EditPartSect'>
                    <label htmlFor="image"><b>Image adress</b></label>
                    <input
                        id='imageUrl'
                        className="PartInputs"
                        type="text"
                        name="imageUrl"
                        required
                        value={partData.imageUrl}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className='EditPartSect'>
                    <label htmlFor="price"><b>Price</b></label>
                    <input
                        id='price'
                        className="PartInputs"
                        type="text"
                        name="price"
                        required
                        value={partData.price}
                        onChange={onChangeHandler}
                    />
                </div>

                <div className='EditPartSect'>
                    <label htmlFor="description"><b>Description</b></label>
                    <input
                        id='description'
                        className="PartInputs"
                        type="text"
                        name="description"
                        required
                        defaultValue={partData.description}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className='EditPartSect'>
                    <label htmlFor="phone"><b>Phone number</b></label>
                    <input
                        id='phone'
                        className="PartInputs"
                        type="text"
                        name="phone"
                        required
                        defaultValue={partData.phone}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className='EditPartSect'>
                    <button className="UpdatePartAD">UPDATE</button>
                </div>

            </div>
        </form>
    </div>)
    )
}



