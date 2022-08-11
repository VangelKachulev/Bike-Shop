import './BikeAdCreate.css';
import { Link, useNavigate } from 'react-router-dom';
import * as BikeService from '../../../services/BikeService';
import { useContext, useState } from 'react';
import { BikeContext } from '../../../contexts/BikeContext';
import { AuthContext } from '../../../contexts/AuthContext';

export const CreateBikeAd = () => {

    const { addBikeHandler } = useContext(BikeContext);
    const { userData } = useContext(AuthContext);
    const navigate = useNavigate();

    const [createData, setCreateData] = useState({
        brand: '',
        frame: '',
        imageUrl: '',
        price: '',
        wheelSize: '',
        description: '',
        phone: '',
       
    });

    const onChangeHandler = (e) => {
        setCreateData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));;

    };

    const onSubmit = (e) => {
        e.preventDefault();
        const token = userData.accessToken;
        BikeService.post(token, createData)
            .then(result => {
                addBikeHandler(result);

                navigate('/myAds')
            });
    };

    return (
        <div className='BikeBackGroundUploadForm'>
            <form className="BikeUploadForm" onSubmit={onSubmit}>
                <h2 className='BikeLabelForCreateForm'>UPLOAD YOUR BIKE</h2>
                <div className='BikeSwitchButton'>
                    <Link to={`/createPartAd`} >UPLOAD BIKE PARTS</Link>
                </div>
                <div >
                    <div className='BikeInputSections' >
                        <label htmlFor="brand"><b>Brand</b></label>
                        <input
                            id='brand'
                            name='brand'
                            className="BikeUploadAdInput"
                            type="text"
                            required
                            value={createData.brand}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className='BikeInputSections'>
                        <label htmlFor="frame"><b>Frame size</b></label>
                        <input
                            id='frame'
                            className="BikeUploadAdInput"
                            type="text"
                            name="frame"
                            required
                            value={createData.frame}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className='BikeInputSections'>
                        <label htmlFor="image"><b>Image adress</b></label>
                        <input
                            id='imageUrl'
                            className="BikeUploadAdInput"
                            type="text"
                            name="imageUrl"
                            required
                            value={createData.imageUrl}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className='BikeInputSections'>
                        <label htmlFor="price"><b>Price</b></label>
                        <input
                            id='price'
                            className="BikeUploadAdInput"
                            type="text"
                            name="price"
                            required
                            value={createData.price}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className='BikeInputSections'>
                        <label htmlFor="wheelSize"><b>Wheel size</b></label>
                        <input
                            id='wheelSize'
                            className="BikeUploadAdInput"
                            type="text"
                            name="wheelSize"
                            required
                            value={createData.wheelSize}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className='BikeInputSections'>
                        <label htmlFor="description"><b>Description</b></label>
                        <input
                            id='description'
                            className="BikeUploadAdInput"
                            type="text"
                            name="description"
                            required
                            value={createData.description}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className='BikeInputSections'>
                        <label htmlFor="phone"><b>Phone number</b></label>
                        <input
                            id='phone'
                            className="BikeUploadAdInput"
                            type="text"
                            name="phone"
                            required
                            value={createData.phone}
                            onChange={onChangeHandler}

                        />
                    </div>
                    <div className='BikeInputSections'>
                        <button className="BikeUploadAdBtm">Upload</button>
                    </div>

                </div>


            </form>
        </div>
    )
}