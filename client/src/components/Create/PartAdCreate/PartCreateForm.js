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

        <div className='BackGroundUploadForm'>
            <form onSubmit={onSubmit} className="UploadForm">
                <h2 className='LabelForCreateForm'>UPLOAD BIKE PARTS</h2>
                <div className='SwitchButtontoBikes'>
                    <Link to={`/createBikeAd`} >UPLOAD YOUR BIKE</Link>
                </div>
                <div >
                    <div className='InputSections' >
                        <label htmlFor="type"><b>Type</b></label>
                        <input
                            id='type'
                            name='type'
                            className="UploadAdInput"
                            type="text"
                            required
                            value={formData.type}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className='InputSections'>
                        <label htmlFor="brand"><b>Brand</b></label>
                        <input
                            id='brand'
                            className="UploadAdInput"
                            type="text"
                            name="brand"
                            required
                            value={formData.brand}
                            onChange={onChangeHandler}
                        />
                    </div>

                    <div className='InputSections'>
                        <label htmlFor="image"><b>Image adress</b></label>
                        <input
                            id='imageUrl'
                            className="UploadAdInput"
                            type="text"
                            name="imageUrl"
                            required
                            value={formData.imageUrl}
                            onChange={onChangeHandler}

                        />
                    </div>
                    <div className='InputSections'>
                        <label htmlFor="price"><b>Price</b></label>
                        <input
                            id='price'
                            className="UploadAdInput"
                            type="text"
                            name="price"
                            required
                            value={formData.price}
                            onChange={onChangeHandler}
                            onBlur={priceAndPhoneCheck}
                        />
                        {error.price && <p className='Validation'>Add valid price!</p>}
                    </div>

                    <div className='InputSections'>
                        <label htmlFor="description"><b>Description</b></label>
                        <input
                            id='description'
                            className="UploadAdInput"
                            type="text"
                            name="description"
                            required
                            value={formData.description}
                            onChange={onChangeHandler}

                        />
                    </div>
                    <div className='InputSections'>
                        <label htmlFor="phone"><b>Phone number</b></label>
                        <input
                            id='phone'
                            className="UploadAdInput"
                            type="text"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={onChangeHandler}
                            onBlur={priceAndPhoneCheck}
                        />
                        {error.phone && <p className='Validation'>The phone number is not valid!</p>}
                    </div>
                    <div className='InputSections'>
                        <button className="UploadAdBtm">Upload</button>
                    </div>
                </div>
            </form >
        </div >
    )
}




