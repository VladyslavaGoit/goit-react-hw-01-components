import { DescriptionBox, ItemStats, ListStats, Name, PhotoUser, ProfileBox, Tag } from "./Profile.styled";
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => <ProfileBox className="profile">
  <DescriptionBox className="description">
    <PhotoUser
      src={avatar}
      alt={username}
      className="avatar"
    />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <p className="location">{location}</p>
  </DescriptionBox>

  <ListStats className="stats">
    <ItemStats>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </ItemStats>
    <ItemStats>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </ItemStats>
    <ItemStats>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </ItemStats>
  </ListStats>
</ProfileBox>

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
}