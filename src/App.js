import React, { useState, useEffect } from 'react';

// hooks
import useStateWithCallback from './useStateWithCallback';

function App() {
  const [state_B, setState_B] = useState(1234567890);
  const [state_A, setState_A] = useStateWithCallback('Ozes');

  function changeState(newValue) {
    setState_A(newValue);
  }

  function changeStates(newValue) {
    console.log('changeStates');

    // The param state_A here is not the one used in useStateWithCallback()
    setState_A(newValue, (state_A) => {
      console.log('state_A callback');
      console.log('Value of state_A inside its callback:', state_A);

      setState_B(new Date().getSeconds());
    });
  }

  useEffect(() => console.log('state_A useEffect'), [state_A]);
  useEffect(() => console.log('state_B useEffect'), [state_B]);

  // console.log('state_A:', state_A);
  // console.log('state_B:', state_B);

  return (
    <div>
      <strong>state_A:</strong> {state_A}
      <br />
      <strong>state_B:</strong> {state_B}
      <br />
      <button
        type='button'
        onClick={() =>
          changeState(state_A === 'Ozes' ? 'Ojesh Manandhar' : 'Ozes')
        }
      >
        Change Name Without Callback
      </button>
      <br />
      <button
        type='button'
        onClick={() =>
          changeStates(state_A === 'Ozes' ? 'Ojesh Manandhar' : 'Ozes')
        }
      >
        Change Name With Callback
      </button>
    </div>
  );
}

export default App;
