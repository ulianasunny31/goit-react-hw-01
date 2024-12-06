import { username, tag, location, avatar, stats } from './userData.json';
import friends from './friends.json'
import transactions from './transactions.json'
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
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
      <TransactionHistory items={transactions}/>
    </>
  )
}

export default App
