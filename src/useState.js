import { useState } from 'react';
import { Button} from 'bootstrap';

export default function Counters() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => { setNumber(3*number + 1);
       setNumber(20);}}>+</button>
    </>
  )
}
