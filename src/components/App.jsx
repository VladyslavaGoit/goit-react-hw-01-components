import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friendList/FriendList";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json'
import transactions from '../transactions.json'

export const App = () => {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats} />
      <Statistics stats={data} title="Upload stats"/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
