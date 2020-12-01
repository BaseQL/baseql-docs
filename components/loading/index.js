import styles from './index.module.css'

export default () => (
  <div className={styles.cont}>
    <div className={`${styles.cube} ${styles.cube1}`}></div>
    <div className={`${styles.cube} ${styles.cube2}`}></div>
    <div className={`${styles.cube} ${styles.cube4}`}></div>
  </div>
)