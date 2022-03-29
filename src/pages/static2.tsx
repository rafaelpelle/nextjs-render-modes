import styles from '../styles/Home.module.css';

export default function Static2() {
  return (
    <div className={styles.container}>
      <h1>This content is static</h1>
      <p>
        It will be rendered during the project build, and hydrated on
        client-side
      </p>
      <p>
        However, while rendering your application, there was a difference
        between the React tree that was pre-rendered (SSR/SSG) and the React
        tree that rendered during the first render in the Browser. The first
        render is called Hydration which is a feature of React.
      </p>

      <a
        href="https://nextjs.org/docs/messages/react-hydration-error"
        target="_blank"
        rel="noreferrer"
      >
        React Hydration Error Docs
      </a>

      <p>{Math.random()}</p>
    </div>
  );
}
