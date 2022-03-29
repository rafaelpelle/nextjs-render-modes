import styles from '../styles/Home.module.css';

interface Props {
  num: number;
}

export async function getStaticProps() {
  let num = 0;
  try {
    const response = await fetch('http://localhost:3000/api/random');
    const json = await response.json();
    num = json.num;
  } catch (err) {
    console.error(err);
  }

  return {
    revalidate: 10, // In seconds
    props: {
      num,
    },
  };
}

export default function Static5({ num }: Props) {
  return (
    <div className={styles.container}>
      <h1>This content is fully static</h1>
      <p>
        It will be rendered during the project build and rerendered every 10 sec
      </p>
      <p>{num}</p>
    </div>
  );
}
