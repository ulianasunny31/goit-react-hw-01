import { username, tag, location, avatar, stats } from './userData.json';
import friends from './friends.json'
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendsList/FriendsList';
import './App.css'

function App() {

  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
    </>
  )
}

export default App
