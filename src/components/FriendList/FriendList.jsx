import css from "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem"


const FriendList = ({friends}) => {
    return (
    <div className={css.friendsList}>
        <ul className={css.friendsName}>
                {friends.map((item) => 
                (<li className={css.friendsItem} key={item.id }>
                    <FriendListItem {...item} />
                </li>
                ))}
        </ul>
    </div >
    )
};


export default FriendList