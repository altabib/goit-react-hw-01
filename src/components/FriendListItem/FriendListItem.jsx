import css from "./FriendListItem.module.css"


const FriendListItem = ({ avatar, name, isOnline = false }) => {
  
  return (
    <div className={css.FriendListItemCard}>
      
      <img className={css.FriendListItemImg} src={avatar} alt={name} width="48" />
      
      <p className={css.FriendListItemName}>{name}</p>
      
      <p className={`${css.FriendListItemStatus} ${isOnline ? css.cardStatusOnline : css.FriendListItemStatus}`}>
        
        {isOnline ? "isOnline" : "Offline"}</p>
      
</div>)
}
 
export default FriendListItem