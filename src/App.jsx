import './App.css';

import Profile from './components/Profile/Profile'
import userData from "./userData.json"

import FriendList from "./components/FriendList/FriendList"
import friends from "./friends.json"

import transactions from "./transactions.json"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"


function App() {

  return (

    <div>
      
      <Profile
        
        key={userData.id}

        name={userData.username}

        tag={userData.tag}

        location={userData.location}

        image={userData.avatar}

        stats={userData.stats}

      />
        
      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
      
    </div>
  
)
   
}

export default App


















