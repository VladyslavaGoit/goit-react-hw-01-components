import { FriendListItem } from "components/friendListItem/FriendListItem";
import css from "./FriendList.module.css"
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => <ul className={css.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)}
</ul>

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}