import React, {Component} from 'react';

class MyComponent extends Component{
    state = {
        name: 'Mizanur Rahman',
        profession: 'Front-end developer',
        age: 31,
    }
    render (){
      return (
          <div>
            <h3>I'm {this.state.name}</h3>
            <p>I'm a {this.state.profession}</p>
            <p>I'm a {this.state.age} years old.</p>
            <button>Click Me</button>
          </div>
      );
    }
  }
  
  export default MyComponent;