import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/navigation';
import Toolbar from './components/toolbar';
import Chat from './components/chat';
import ChatEntry from './components/chat-entry';


ReactDOM.render(<div className="app">
  <Navigation/>
  <div className="content">
   <Toolbar/>
   <Chat/>
   <ChatEntry/>
  </div>
</div>, document.getElementById('app-container'));
