import React from 'react';
import styled from 'styled-components'

import logo from './logo.svg';
import './App.css';

import { useHook, MyComponent } from 'components'

function App() {

  useHook()

  return (
    <Cont>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MyComponent />
        </header>
      </div>
    </Cont>
  )
}

const Cont = styled.div`
  border: 1px solid red;
`

export default App;
