import React, { useState } from 'react';

// hooks
import useStateWithCallback from './useStateWithCallback';

function App() {
  const [state_B, setState_B] = useState(1234567890);
  const [state_A, setState_A] = useStateWithCallback('Ozes');

  function changeStates(newValue) {
    console.log('changeStates');

    setState_A(newValue, () => {
      console.log('state_A callback');

      setState_B(new Date().getSeconds());
    });
  }

  // console.log('state_A:', state_A);
  // console.log('state_B:', state_B);

  return (
    <div>
      <strong>state_A:</strong> {state_A} <br />
      <strong>state_B:</strong> {state_B} <br />
      <button
        type='button'
        onClick={() =>
          changeStates(state_A === 'Ozes' ? 'Ojesh Manandhar' : 'Ozes')
        }
      >
        Change Name
      </button>
    </div>
  );
}

export default App;
