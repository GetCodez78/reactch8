import React, { Component } from 'react';
import { Panel } from 'muicss/react';
import MongoView from './MongoView';

class Mongo extends Component {
  handleEditState(task, checked) {
    this.props.onEditState(task, checked);  // get arguments from or send arguments to <Task />? 
  }

  render() {
    let taskItems;
    if (this.props.tasks) {
      taskItems = this.props.tasks.map(task => {
        return (
          //from TaskItem.js this.props.onEditState(task, e.target.checked)
          <MongoView onEditState={this.handleEditState.bind(this)} key={task._id.$oid} task={task} />
        );
      });
    }
    // end if statement
    // on return means next statment will not run
    return (
      <Panel>
        {taskItems}
      </Panel>
    );
  }
}

export default Mongo;
