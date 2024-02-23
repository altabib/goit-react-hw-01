// import React from 'react'

const Profile = ({
    img,
    alt,
    userName,
    mail,
    adress,
    followers,
    views,
    likes
}) => {
    return (
        <div>
            <div>
                <img
                    src={img}
                    alt={alt}
                />
                <p>{userName}</p>
                <p>{mail}</p>
                <p>{adress}</p>
            </div>

            <ul>
                <li>
                    <span>Followers </span>
                    <span>{followers}</span>
                </li>
                <li>
                    <span>Views </span>
                    <span>{views}</span>
                </li>
                <li>
                    <span>Likes </span>
                    <span>{likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile