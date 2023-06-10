import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => <section className={css.statistics}>
    <div className={css.statisticsBox}>
    {title && (<h2 className={css.title}>{title}</h2>)}
    <ul className={css['stat-list']}>
        {stats.map(({id, label, percentage}) =>     <li className={css.item} style={{backgroundColor: getRandomHexColor()}} key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>)}
    </ul>
    </div>
</section>

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired
}