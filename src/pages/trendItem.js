import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
function TrendItem(props) {
  const {
    title,
    description,
    link,
  } = props;

  return (
    <div>
      <Link to={link} className={styles.trendItem}>
        <article>
          <h2>{title}</h2>
          <div>{description}</div>
        </article>
      </Link>
    </div>
  );
}

export default TrendItem;
