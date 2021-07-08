import React from 'react';
import './App.css';
import SampleComponent from './SampleComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <SampleComponent type="y" />
        <SampleComponent someFn={() => {}} type="x" />

      </header>
    </div>
  );
}

export default App;
