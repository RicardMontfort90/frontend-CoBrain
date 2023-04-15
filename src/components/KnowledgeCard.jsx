import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function KnowledgeCard({ knowledge, handleDelete }) {
    const { category, _id,  userId, title, knowledgeImage, timeOfActivity, location, description, contactMe } = knowledge;
    const { user } = useAuth();
    const handleDeleteKnowledge = () => {
        handleDelete(_id)
    };

    return (
        <>
            { knowledge && <div className="card">
            <h2>{title}</h2>
            <img src={knowledgeImage} alt={title} />
            <p>{description}</p>
            <ul>
                <li>Time: {timeOfActivity}h</li>
                <li>Location: {location}</li>
                <li>Knowledge: {category}</li>
                <li>Contact me: {contactMe}</li>
            </ul>
            {user && user._id === userId && <button className="btn" style={{ marginLeft: '10px' }} onClick={handleDeleteKnowledge}>Delete</button>}
            {user && user._id === userId && <button className="btn" style={{ marginLeft: '10px' }}><Link to={`/edit/${_id}`}>Edit</Link></button>}       
            </div>}
        </>
    )
};