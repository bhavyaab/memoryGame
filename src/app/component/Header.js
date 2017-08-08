import React from 'react';


export class Header extends React.Component{
render (){
  return (
    <nav className="navbar">
      <div className="container">
       <div className="navbar-header">
          <ul className="nav nav-bar-nav">
             <li><a href="a">Home</a></li>
             <li><a href="a">About</a></li>
             <li><a href="a">Play</a></li>
          </ul>
       </div>
      </div>
    </nav>
   )
}
}
