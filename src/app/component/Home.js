import React from 'react';

export class Home extends React.Component {
  constructor(props){
    super();
    this.score = props.user.score;
  }
  addScore (){
    console.log(' Add score called and new score is ', this.score);
    this.score += 3;
  }
  render(){
    console.log('props - ', this.props);
    return (
      <div>
           <p>new Home Component!</p>
            <p>
             <span>User Check: user name is - {this.props.user.name} and age is: {this.props.user.age}</span>
             <li>Score: {this.score}</li>
            </p>
             <h5>User hobbies are:</h5>
               <ul>
                 {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
              </ul>
            {/* One way off spassing event */}
           <button className="btn btn-primary" onClick={ (e) => this.addScore(e)}>Add Score </button>
            <p>new score : {this.score}</p>
            {/*other way of passing event*/}
            <button className="btn btn-primary" onClick={this.addScore.bind(this)}>Add Score </button>
             <p>new score : {this.score} : {this.props.user.score}</p>
      </div>
    );
  }
}

Home.propTypes = {
  user: React.PropTypes.object,
};
