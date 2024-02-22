import React from 'react';
import './App.css';
import Storage from './components/Storage'

function App() {
  const [content, setContent] = Storage('content','')
  return (
    <div>
      <input type="text" value={content} onChange={e=>setContent(e.target.value)}></input>
    </div>
  );
}

export default App;