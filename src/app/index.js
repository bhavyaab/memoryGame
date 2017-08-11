
import React from 'react';
import { render } from 'react-dom';

import {Header} from './component/Header';
import { Home } from './component/Home';

class App extends React.Component {
  render (){
    var user ={
      name: 'Ana',
      age: 34,
      score: 0,
      hobbies: ['Sports', 'Banana', 'Grapes'],
    };
    return (
      <div className="container">
        <div className="row">
           <div className="col-xs-10 col-xs-offset-1">
              <Header/>
            </div>
         </div>
      <div className="row">
         <div className="col-xs-10 col-xs-offset-1">
            <Home user={user}/>
          </div>
       </div>
      </div>
    );
  }
}
render(<App/>, document.getElementById('root'));
