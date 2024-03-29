import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" isSpecial={true}/>
      <Hello name="test" color="pink" isSpecial/>
    </Wrapper>
  );
}

export default App;
