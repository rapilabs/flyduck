import React from 'react';


export default class Chat extends React.Component {

  renderChatLines() {
    return this.props.chatLines.map((line) => {
      return <div className="line" key={line.id}>{line.msg}</div>;
    });
  }

  render() {
    return (
      <div className="main">
       {this.renderChatLines()}
      </div>
    );
  }
}

Chat.defaultProps = {
  chatLines: []
}
