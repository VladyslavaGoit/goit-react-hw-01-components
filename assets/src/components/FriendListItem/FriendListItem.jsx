import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => <li className={css.item}>
  <span className={isOnline? `${css.status} ${css.statusOnline}`: `${css.status} ${css.statusOfline}`}></span>
  <img className="avatar" src={avatar} alt={name} width="48"/>
    <p className="name">{name}</p>
</li>

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}