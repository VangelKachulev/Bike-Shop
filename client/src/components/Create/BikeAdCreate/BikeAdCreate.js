import './BikeAdCreate.css';
import { Link, useNavigate } from 'react-router-dom';
import * as BikeService from '../../../services/BikeService';
import { useContext, useState } from 'react';
import { BikeContext } from '../../../contexts/BikeContext';
import { AuthContext } from '../../../contexts/AuthContext';

export const CreateBikeAd = () => {

    const { addBikeHandler } = useContext(BikeContext);
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        brand: '',
        frame: '',
        imageUrl: '',
        price: '',
        wheelSize: '',
        description: '',
        phone: '',

    });

    const onChangeHandler = (e) => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));

    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!isNaN(formData.phone) && !isNaN(formData.price)) {

            BikeService.post(token, formData)
                .then(result => {
                    addBikeHandler(result);

                    navigate('/myAds')
                })
                .catch(() => {
                    navigate('/404')
                })
        }
    };

    const [error, setError] = useState(false);
    const priceAndPhoneCheck = (e) => {

        if (!isNaN(e.target.value)) {
            setError(state => ({
                ...state,
                [e.target.name]: false
            }))
        } else {
            setError(state => ({
                ...state,
                [e.target.name]: true
            }))
        }
    }
    return (
        < div className='upload-page-background' >
            <form className="upload-form" onSubmit={onSubmit}>
                <h2 className='upload-label'>UPLOAD YOUR BIKE</h2>
                <div className='switch-btn'>
                    <Link to={`/createPartAd`} >UPLOAD BIKE PARTS</Link>
                </div>
                <div className='upload-form-inputs'>
                    <div className='upload-single-input' >
                        <label htmlFor="brand"><b>Brand</b></label>
                        <input
                            id='brand'
                            name='brand'

                            type="text"
                            required
                            value={formData.brand}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className='upload-single-input'>
                        <label htmlFor="frame"><b>Frame size</b></label>
                        <input
                            id='frame'

                            type="text"
                            name="frame"
                            required
                            value={formData.frame}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className='upload-single-input'>
                        <label htmlFor="image"><b>Image adress</b></label>
                        <input
                            id='imageUrl'

                            type="text"
                            name="imageUrl"
                            required
                            value={formData.imageUrl}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className='upload-single-input'>
                        <label htmlFor="price"><b>Price</b></label>
                        <input
                            id='price'

                            type="text"
                            name="price"
                            required
                            value={formData.price}
                            onChange={onChangeHandler}
                            onBlur={priceAndPhoneCheck}
                        />
                        {error.price && <p className='upload-page-validation'>Add valid price!</p>}
                    </div>
                    <div className='upload-single-input'>
                        <label htmlFor="wheelSize"><b>Wheel size</b></label>
                        <input
                            id='wheelSize'

                            type="text"
                            name="wheelSize"
                            required
                            value={formData.wheelSize}
                            onChange={onChangeHandler}
                        />

                    </div>
                    <div className='upload-single-input'>
                        <label htmlFor="description"><b>Description</b></label>
                        <input
                            id='description'

                            type="text"
                            name="description"
                            required
                            value={formData.description}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className='upload-single-input'>
                        <label htmlFor="phone"><b>Phone number</b></label>
                        <input
                            id='phone'

                            type="text"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={onChangeHandler}
                            onBlur={priceAndPhoneCheck}

                        />

                        {error.phone && <p className='upload-page-validation'>The phone number is not valid!</p>}
                    </div>
                    <div className='upload-single-input'>

                        <button disabled={!formData} className="upload-bike-btn">Upload</button>


                    </div>

                </div>


            </form>
        </div >

    )
}
