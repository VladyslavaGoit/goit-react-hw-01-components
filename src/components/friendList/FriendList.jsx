import { FriendListItem } from "components/friendListItem/FriendListItem";

export const FriendList = ({ friends }) => <ul className="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)}
</ul>