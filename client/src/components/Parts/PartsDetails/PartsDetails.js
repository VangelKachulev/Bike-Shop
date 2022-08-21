import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import * as partService from '../../../services/PartsService';
import * as commentService from '../../../services/CommentService';
import "./partDetails.css";

import { AuthContext } from '../../../contexts/AuthContext';
import { PartsContext } from '../../../contexts/PartsContext';

export const PartDetails = () => {

    const navigate = useNavigate();
    const { token, userData } = useContext(AuthContext);
    const { emptyPartsState } = useContext(PartsContext);
    const { id } = useParams();

    const [partInfo, setPartInfo] = useState({});
    const [currentComents, setCurrentComments] = useState([]);
    const [commentInput, setCommentInput] = useState({
        comment: ''
    });

    useEffect(() => {
        partService.getOne(id)
            .then(data => setPartInfo(data));

        commentService.getAllComments()
            .then(res => setCurrentComments(Object.values(res)));
    }, []);

    const onCommentChange = e => {
        setCommentInput(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const addCommentHandler = (e) => {

        e.preventDefault();

        const data = {
            partId: id,
            author: userData.email,
            comment: commentInput.comment
        };

        commentService.createComment(token, data)
            .then(result => {
                setCurrentComments(state => [
                    ...state,
                    result
                ])
            });

        commentInput.comment = '';
    };
    const deletPartAd = () => {
        const confirmation = window.confirm('Are you sure you want to delete this ad?');
        if (confirmation) {

            partService.removeAd(token, partInfo._id);
            emptyPartsState(partInfo._id);
            navigate('/myAds');
        };
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
            <div className="PartCommentSection">
                <h2>Comments:</h2>

                <ul >

                    {(currentComents?.map(x => partInfo._id === x.partId
                        && <li className="SingleComment" key={x._id}>
                            <h3 className="CommentAuthorPart" >{x.author}:</h3>
                            <p className="CommentText">{x.comment}</p>
                        </li>))
                        || (<h1>No comments</h1>)

                    }
                </ul>
            </div>
            {userData.accessToken ?
                <div className="MainComentSectionParts">

                    <form onSubmit={addCommentHandler}>
                        <input
                            className="InputAreaComment"
                            name='comment'
                            placeholder="Add new comment.."
                            onChange={onCommentChange}
                            value={commentInput.comment}
                        >
                        </input>
                        <button
                            disabled={!commentInput.comment}
                            className="AddCommentButton"
                            type="submit"
                            value='Add comment'> Comment
                        </button>
                    </form>
                </div>
                : null
            }

        </div >
    )
}








