import React from 'react';
import Link from '../Link/Link';
import './app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(`props = ${JSON.stringify(props)}`); 
  }
  componentDidMount() {
    this.props.load();
  }
  render() {
    return (
     <div>
        <div className="mainBlock">
          App name = {this.props.name}
          <div className="iconBlock"/>
        </div>
        <div>
          <label htmlFor="username">User name:<input type="text" id="username"/></label>
          <label htmlFor="password">Password:<input type="password" id="password"/></label>
          <input type="button" value="Click me" id="btn"/>
        </div>
        <Link>Using link component</Link>
      </div>
      );
  }
}