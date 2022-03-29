import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

// In order to prevent the first render from being different you can use `useEffect`
// which is only executed in the browser and is executed during hydration
export default function Static3() {
  // The default value is 0, it will be used during pre-rendering
  // and the first render in the browser (hydration)
  const [num, setNum] = useState(0);

  // During hydration `useEffect` is called. `window` is available in `useEffect`.
  // In this case because we know we're in the browser checking for window is not needed.
  // If you need to read something from window that is fine.
  // By calling `setNum` in `useEffect` a render is triggered after hydrating,
  // this causes the "browser specific" value to be available. In this case a random number.
  useEffect(() => {
    setNum(Math.random());
  }, []);

  return (
    <div className={styles.container}>
      <h1>This content is static</h1>
      <p>It will be rendered during the project build</p>
      <p>{num}</p>
    </div>
  );
}
