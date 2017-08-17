import React, { Component } from 'react';
import { Appbar, Container } from 'muicss/react';
import Tasks from './Components/Tasks';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {  // create the object without a param
    super()
    this.state = {
      tasks: []
    }
  }

  componentWillMount() {
    this.getTasks();
  }

  getTasks() {
    axios.request({
      method:'get',
      url: 'https://api.mlab.com/api/1/databases/mytasklist_zeeli/collections/tasks?apiKey=VQthB7cDuT3pjoMXwMPb0p5wXgR3jL4O'
    }).then((response) => {
      this.setState({tasks: response.data}, () => {
        console.log(this.state);
      })
    }).catch((error)=> {
      console.log(error);
    })
  }
  render() {
    
    return (
      <div className="App">
        <Appbar>
          <Container>
        <table width="100%">
         <tbody>
           <tr>
             <td className="mui--appbar-height"><h3>React Tasks</h3></td>
           </tr>
         </tbody>
       </table>
       </Container>
        </Appbar>
        <br/>
        <Container>
          <Tasks tasks={this.state.tasks}/>
          </Container>
      </div>
    );
  }
}

export default App;
