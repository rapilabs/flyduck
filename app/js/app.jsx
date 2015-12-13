import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/navigation';
import Toolbar from './components/toolbar';
import Chat from './components/chat';
import ChatEntry from './components/chat-entry';


let ws = new WebSocket("ws://localhost:8080/sub");


export class App extends React.Component {

  state = {
    chatLines: []
  }

  componentDidMount() {
    ws.onmessage = this.onChat.bind(this);
  }

  componentWillUnmount() {
    ws.onmessage = null;
  }

  onChat(event) {
    this.state.chatLines.push({
      id: event.timeStamp,
      msg: event.data
    });
    this.forceUpdate();
  }

  render() {
    return (
      <div className="app">
        <Navigation/>
        <div className="content">
          <Toolbar/>
          <Chat chatLines={this.state.chatLines} />
          <ChatEntry/>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('app-container'));
