import styles from '../styles/header.module.css'
import PropTypes from 'prop-types';

export function Header(props) {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>{props.title}</h1>
      <h2 className={styles.headerSubtitle}>{props.subtitle}</h2>
      <img className={styles.headerImage} src={props.image} />
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string
}; 
