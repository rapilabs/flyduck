import React from 'react';


export default class ChatEntry extends React.Component {
  render() {
    return (
      <form className="chat-entry">
       <textarea placeholder="Type to chat in the Common Code flow…"></textarea>
       <button>Send</button>
      </form>
    );
  }
}

