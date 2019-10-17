import React from 'react';
import './App.css';
import Welcome from './component/Welcome';
import tick from './img/tick.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newUser : '',
      currentFilter: 'all',
      Welcomes : [
        { name: 'Nguyễn Ngọc Thanh Huy', isComplete: true },
        { name: 'Huỳnh Công Linh', isComplete: false },
        { name: 'Huỳnh Công Linh', isComplete: false },
        { name: 'Huy Nguyễn Linh Huỳnh', isComplete: false }
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.filterAll = this.filterAll.bind(this);
    this.filterCompleted = this.filterCompleted.bind(this);
    this.filterActive = this.filterActive.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      console.log(item);
      const isComplete = item.isComplete;
      let { Welcomes } = this.state;
      const index = Welcomes.indexOf(item);
      this.setState({
        Welcomes: [
          ...Welcomes.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...Welcomes.slice(index + 1)
        ]
      });
    }
  }
  
  onKeyUp(event) {
    console.log(event.keyCode);
    let text = event.target.value;
    if(!text) {
      return;
    }
    // Xóa giá trị cách ở đầu và cuối
    text = text.trim();
    
    if(!text) { return; }
    if(event.keyCode === 13) { //key enter
      this.setState({
        newUser: '',
        Welcomes: [
          { name: text, isComplete: false },
          ...this.state.Welcomes
        ]
      });
    } else {
      this.setState({
        newUser: text
      });
    }
  }

  onChange(event) {
    this.setState({
      newUser: event.target.value
    });
  }

  filterAll(event) {
    this.setState({
      currentFilter: 'all'
    });
  }

  filterActive(event) {
    this.setState({
      currentFilter: 'active'
    });
  }

  filterCompleted(event) {
    this.setState({
      currentFilter: 'completed'
    });
  }


  render() {
    let { currentFilter } = this.state;
    var filterUsers = this.state.Welcomes.filter((x) => {
      if(currentFilter === 'active') return x.isComplete === false;
      if(currentFilter === 'completed') return x.isComplete === true;
      return x;
    });
    console.log(filterUsers);
    return (
      <div className="App">
        {
          <div className="header">
            <img src={tick} alt="Hình" width={28} />
            <input type="text" value={this.state.newUser} onChange={this.onChange} placeholder="Add User"  onKeyUp={this.onKeyUp}/>
          </div>
        }
        {
          filterUsers.length >0 && filterUsers.map((item, index) => <Welcome key={index} item={item} onClick={this.onItemClicked(item)} />)
        }
        {
          filterUsers.length === 0 && 'Nothing here'
        }
        {
          <div className="footer">
            <button className="btn" onClick={this.filterAll}>All</button>
            <button className="btn" onClick={this.filterActive}>Active</button>
            <button className="btn" onClick={this.filterCompleted}>Completed</button>
          </div>
        }
      </div>
    )
  }
}

export default App;
