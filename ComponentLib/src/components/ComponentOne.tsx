import { useState } from "react";

function ComponentOne() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Component One
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>
        Count <span>{count}</span>
      </p>
    </div>
  );
}

export default ComponentOne;
