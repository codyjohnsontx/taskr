import { useState } from 'react';
import './App.css';
import Button from './components/Button.tsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello world</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button />
      </div>
    </>
  );
}

export default App;
