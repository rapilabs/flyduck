import React from 'react';


export default class Navigation extends React.Component {
  render() {
    return (
     <div className="sidebar">
      <header>
       <button className="user-menu">david</button>
       <div className="spacer"></div>
       <button className="fa fa-bell"></button>
      </header>
      <div className="channels">
       <h1>COMMON CODE</h1>
       <ul>
        <li><a href="#">Common Code</a></li>
        <li><a href="#">Grumpy Coder's Club</a></li>
       </ul>
       <h1>1-TO-1S</h1>
      </div>
      <footer>
       <button className="fa fa-caret-square-o-left"></button>
       <button className="fa fa-plus"></button>
      </footer>
     </div>
    );
  }
}

