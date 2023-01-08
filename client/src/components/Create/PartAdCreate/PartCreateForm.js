import { Link, useNavigate } from 'react-router-dom';
import './PartCreateForm.css';
import * as partsService from "../../../services/PartsService";
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext, useState } from 'react';
import { PartsContext } from '../../../contexts/PartsContext';

export const CreatePartAd = () => {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const { addPartHandler } = useContext(PartsContext);

    const [formData, setFormData] = useState({
        type: '',
        brand: '',
        imageUrl: '',
        price: '',
        description: '',
        phone: ''
    });

    const onChangeHandler = (e) => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!isNaN(formData.phone) && !isNaN(formData.price)) {

            partsService.post(token, formData)
                .then(result => {
                    addPartHandler(result);

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

        <div className='part-upload-background'>
            <form onSubmit={onSubmit} className="part-upload-form">
                <h2 className='part-upload-label'>UPLOAD BIKE PARTS</h2>
                <div className='switch-to-bikes'>
                    <Link to={`/createBikeAd`} >UPLOAD YOUR BIKE</Link>
                </div>
                <div className='part-upload-inputs'>
                    <div className='part-upload-single-input' >
                        <label htmlFor="type"><b>Type</b></label>
                        <input
                            id='type'
                            name='type'

                            type="text"
                            required
                            value={formData.type}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className='part-upload-single-input'>
                        <label htmlFor="brand"><b>Brand</b></label>
                        <input
                            id='brand'

                            type="text"
                            name="brand"
                            required
                            value={formData.brand}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className='part-upload-single-input'>
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
                    <div className='part-upload-single-input'>
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
                        {error.price && <p className='Validation'>Add valid price!</p>}
                    </div>

                    <div className='part-upload-single-input'>
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
                    <div className='part-upload-single-input'>
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
                        {error.phone && <p className='data-validation'>The phone number is not valid!</p>}
                    </div>
                    <div className='part-upload-single-input'>
                        <button className="part-upload-btn">Upload</button>
                    </div>
                </div>
            </form >
        </div >
    )
}




