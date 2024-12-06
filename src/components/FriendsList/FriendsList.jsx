import FriendListItem from "../FriendListItem/FriendListItem";
import css from './FriendsList.module.css'

function FriendList({friends}) {
    
    return (
       
    <ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline,id }) => {
            return (
          <li key={id} className={css.friendListItem}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />       
          </li>
      )
        })}
            </ul>
        
    )
}

export default FriendList;