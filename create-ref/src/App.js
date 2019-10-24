import React from 'react';
import { Button, Input } from 'reactstrap';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.removeText = React.createRef();
    this.focusInput = React.createRef();
  }

  componentDidMount() {
    this.focusInput.current.focus();
  }

  onClick() {
    this.removeText.current.reset();
  }

  render() {
    return (
      <div className="App">
        <form action="#" method="GET" ref={this.removeText}>
          <Input type="text" placeholder="Please enter content" innerRef={this.focusInput}/>
          <Button color="success" onClick={() => this.onClick() }>Remove Text</Button> 
        </form>
      </div>
    )
  }
}

export default App;
