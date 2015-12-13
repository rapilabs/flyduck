import React from 'react';
import autobind from 'autobind-decorator';


export default class ChatEntry extends React.Component {

  @autobind
  onSubmit(e) {
    e.preventDefault();
    console.log('submitting: ' + this.refs.message.value);
    let req = new XMLHttpRequest();
    req.open('POST', 'http://localhost:8080/pub');
    req.send(this.refs.message.value);
  }

  render() {
    return (
      <form className="chat-entry" onSubmit={this.onSubmit}>
       <textarea name="message" ref="message" placeholder="Type to chat in the Common Code flow…"></textarea>
       <button type="submit">Send</button>
      </form>
    );
  }
}

