import './editBikeAd.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import * as BikeService from '../../../services/BikeService';
import { AuthContext } from '../../../contexts/AuthContext';
import { BikeContext } from '../../../contexts/BikeContext';

export const EditBikeAd = () => {
    const { token } = useContext(AuthContext);
    const { editBikeState } = useContext(BikeContext);

    const navigate = useNavigate();
    const location = useLocation();

    const { bikeInfo } = location.state;

    const [bikeData, setBikeData] = useState({
        brand: bikeInfo.brand,
        frame: bikeInfo.frame,
        imageUrl: bikeInfo.imageUrl,
        price: bikeInfo.price,
        wheelSize: bikeInfo.wheelSize,
        description: bikeInfo.description,
        phone: bikeInfo.phone
    });

    const onChangeHandler = (e) => {
        setBikeData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const updateInfo = (e) => {
        e.preventDefault();

        BikeService.update(token, bikeData, bikeInfo._id)
            .then(result => {

                editBikeState(result._id, result);
                navigate(`/bikes/${result._id}`);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (<div className='MainEditDiv'>

        <form onSubmit={updateInfo} className="EditForm" >
            <h2 className='EditLabel'>EDIT AD</h2>

            <div >
                <div className='EditInputSections' >
                    <label htmlFor="brand"><b>Brand</b></label>
                    <input
                        id='brand'
                        name='brand'
                        className="EditInputs"
                        type="text"
                        required
                        value={bikeData.brand}
                        onChange={onChangeHandler}
                    />
                </div>

                <div className='EditInputSections'>
                    <label htmlFor="frame"><b>Frame size</b></label>
                    <input
                        id='frame'
                        className="EditInputs"
                        type="text"
                        name="frame"
                        required
                        value={bikeData.frame}
                        onChange={onChangeHandler}
                    />
                </div>

                <div className='EditInputSections'>
                    <label htmlFor="image"><b>Image adress</b></label>
                    <input
                        id='imageUrl'
                        className="EditInputs"
                        type="text"
                        name="imageUrl"
                        required
                        value={bikeData.imageUrl}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className='EditInputSections'>
                    <label htmlFor="price"><b>Price</b></label>
                    <input
                        id='price'
                        className="EditInputs"
                        type="text"
                        name="price"
                        required
                        value={bikeData.price}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className='EditInputSections'>
                    <label htmlFor="wheelSize"><b>Wheel size</b></label>
                    <input
                        id='wheelSize'
                        className="EditInputs"
                        type="text"
                        name="wheelSize"
                        required
                        value={bikeData.wheelSize}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className='EditInputSections'>
                    <label htmlFor="description"><b>Description</b></label>
                    <input
                        id='description'
                        className="EditInputs"
                        type="text"
                        name="description"
                        required
                        value={bikeData.description}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className='EditInputSections'>
                    <label htmlFor="phone"><b>Phone number</b></label>
                    <input
                        id='phone'
                        className="EditInputs"
                        type="text"
                        name="phone"
                        required
                        value={bikeData.phone}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className='EditInputSections'>
                    <button className="Update">UPDATE</button>
                </div>
            </div>
        </form>
    </div>)
}



