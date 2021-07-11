import React, { Component } from 'react';
import Card from './components/Card/Card';
import CardHeader from './components/Card/CardHeader';
import CardBody from './components/Card/CardBody';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  
  render(){
    return (
      <div className="App">
        <Card>
          <CardHeader color="primary">Header of card</CardHeader>
          <CardBody>Body of the card</CardBody>
        </Card>
      </div>
    );}
}

export default App;
