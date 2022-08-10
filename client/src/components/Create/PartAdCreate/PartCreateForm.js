import { Link, useNavigate } from 'react-router-dom';
import './PartCreateForm.css';
import * as partsService from "../../../services/PartsService";
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext, useState } from 'react';
import { PartsContext } from '../../../contexts/PartsContext';

export const CreatePartAd = () => {
    const navigate = useNavigate();
    const { userData } = useContext(AuthContext);
    const { addPartHandler } = useContext(PartsContext);

    const [partData, setPartData] = useState({
        type: '',
        brand: '',
        imageUrl: '',
        price: '',
        description: '',
        phone: ''
    });

    const onChangeHandler = (e) => {
        setPartData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const token = userData.accessToken;
        partsService.post(token, partData)
            .then(result => {
                addPartHandler(result);

                navigate('/myAds')
            })
    };

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
                            value={partData.type}
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
                            value={partData.brand}
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
                            value={partData.imageUrl}
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
                            value={partData.price}
                            onChange={onChangeHandler}

                        />
                    </div>

                    <div className='InputSections'>
                        <label htmlFor="description"><b>Description</b></label>
                        <input
                            id='description'
                            className="UploadAdInput"
                            type="text"
                            name="description"
                            required
                            value={partData.description}
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
                            value={partData.phone}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className='InputSections'>
                        <button className="UploadAdBtm">Upload</button>
                    </div>
                </div>
            </form >
        </div >
    )
}




