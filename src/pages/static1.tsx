import styles from '../styles/Home.module.css';

export default function Static1() {
  return (
    <div className={styles.container}>
      <h1>This content is static</h1>
      <p>It will be rendered during the project build</p>
    </div>
  );
}
