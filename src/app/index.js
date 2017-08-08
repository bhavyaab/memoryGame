
import React from 'react';
import { render } from 'react-dom';

import {Header} from "./component/Header";
import { Home } from "./component/Home";

class App extends React.Component {
 render (){
    return (
      <div className="container">
        <div className="row">
           <div className="col-xs-10 col-xs-offset-1">
              <Header/>
            </div>
         </div>
      <p>text</p>
      <div className="row">
         <div className="col-xs-10 col-xs-offset-1">
            <Home/>
          </div>
       </div>
      </div>
       )
    }
}
 render(<App/>, document.getElementById('root'));
