import React from 'react'

export class Home extends React.Component {
  render(){
    console.log('props - ', this.props)
    var text = 'some text'
    return (
      <div>
           <p>new Home Component!</p>
           <p>Your name: {this.props.name}</p>
           <p>Your age: {this.props.age} </p>
           <p> {text} </p>
            <p>
             <span>User Check: user name is - {this.props.user.name} and age is: {this.props.user.age}</span>
            </p>
             <h5>User hobbies are:</h5>
               <ul>
                 {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
              </ul>
                 {this.props.children}
      </div>
    )
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  user: React.PropTypes.object,
}
