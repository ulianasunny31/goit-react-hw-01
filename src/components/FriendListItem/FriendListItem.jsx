import css from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
  return ( 
        <div className={css.friendCard}>
          <img src={avatar} alt="Friend avatar" />
          <p className={css.friendNameP}>{name}</p>
          <p className={isOnline ? css.online : css.offline}>{isOnline ? "Online" : "Offline"}</p>
        </div>
      )
 

}


export default FriendListItem;



 