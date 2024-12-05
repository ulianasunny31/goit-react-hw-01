import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({friends}) {
    
    return (
    <ul>
        {friends.map(({ avatar, name, isOnline,id }) => {
            return (
          <li key={id}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />       
          </li>
      )
        })}
    </ul>
    )
}

export default FriendList;