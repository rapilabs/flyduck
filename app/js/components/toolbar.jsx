import React from 'react';


export default class Toolbar extends React.Component {
  render() {
    return (
      <header>
       <button><i className="fa fa-lock"></i> 2/5 online</button>
       <ul>
        <li><a href="#" className="avatar david"></a></li>
        <li><a href="#" className="avatar brenton"></a></li>
       </ul>
       <button><i className="fa fa-plus"></i> Add people</button>
      </header>
    );
  }
}

