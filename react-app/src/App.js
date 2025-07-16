import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
// 1.引入
import { RouterProvider } from 'react-router-dom'
import router from './router';

function App() {
  const [active, setActive] = useState(false);
  let appClassName = 'App'
  if(active) {
    appClassName += ' active'
  }
  return (
    <div className={appClassName} onClick={()=>setActive(false)}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p onClick={e => {
          e.stopPropagation();
          setActive(true);
        }} >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* 2.绑定 */}
      <div className='route-wrp'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;