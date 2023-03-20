import PropTypes from 'prop-types'; 

import { Container} from "./App.styled"
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import {FriendList} from "components/Friends/FriendList";
import {TransactionHistory} from "components/TransactionHistory/TransactionHistory";

import user from "user.json";
import data from "data.json";
import friends from "friends.json";
import transactions from 'transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </Container>
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}


