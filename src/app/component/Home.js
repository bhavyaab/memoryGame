import React from 'react';

export class Home extends React.Component {
  render(){
      console.log('props', this.props);
      var text = 'some text';
    return (
      <div>
           <p>new Home Component!</p>
           <p>Your name: {this.props.name}</p>
           <p>Your age: {this.props.age} </p>
           <p> {text} </p>
           <h4>Hobbies:</h4>
           <ul>
             {this.props.user.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
           </ul>
      </div>
    );
  }
}
