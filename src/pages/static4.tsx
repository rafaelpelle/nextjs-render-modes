import styles from '../styles/Home.module.css';

interface Props {
  num: number;
}

export function getStaticProps() {
  return {
    props: {
      num: Math.random(),
    },
  };
}

export default function Static4({ num }: Props) {
  return (
    <div className={styles.container}>
      <h1>This content is fully static</h1>
      <p>It will be rendered during the project build</p>
      <p>{num}</p>
    </div>
  );
}
