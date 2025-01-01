```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a test paragraph.</p>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
import { useState, useEffect, useMemo } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  const memoizedIncrement = useMemo(() => () => setCount(count + 1), [count]);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={memoizedIncrement}>Increment</button>
    </div>
  );
}
```