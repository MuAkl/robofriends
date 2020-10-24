import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
class  App extends React.Component{
  constructor(){
    super();
    this.state={  
      robots:[],
      searchField:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users=>this.setState({robots:users}))
  }

  onSearchChange = (event)=>{
   this.setState({searchField : event.target.value})
  }
  render =() => {
    const {robots,searchField} = this.state;
    const filteredRobots = robots.filter((element)=> {return element.name.toLowerCase().includes(searchField.toLowerCase())});

    return !robots.length? <h1>Loading</h1>:
    (
    <div>
        <h1 className="tc">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
      );


} 

      
}

export default App;
