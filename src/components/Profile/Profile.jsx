
import css from "./Profile.module.css"

const Profile = ({
    image,
    name,
    tag,
    location,
    stats
}) => {
    return (
        <div className={css.card}>
            <div className={css.cardProfile}>
                <img className={css.cardImg}
                    width={250}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.cardName}>{name}</p>
                <p className={css.cardTag}>{tag}</p>
                <p className={css.cardlocation}>{location}</p>
            </div>

            <ul className={css.cardStats}>
                <li className={css.cardLi}>
                    <span className={css.carditem}>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.cardLi}>
                    <span className={css.carditem}>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.cardLi}>
                    <span className={css.carditem}>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
};

export default Profile