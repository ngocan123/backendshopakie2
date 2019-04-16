import React, { Component } from 'react';
let $this;
class configUrl extends Component {
  constructor(props) {
      super(props);
      this.state = { baseUrl: 'http://localhost:3008' };
      $this = this;
  }
  componentDidMount(){
    $this.setState({
        baseUrl: $this.state.baseUrl
    });
  }
  showUrl(){
      return $this.state.baseUrl;
  }
    render(){
        {this.showUrl}
    }
}
export default configUrl;


