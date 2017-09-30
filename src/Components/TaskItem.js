import React, { Component } from 'react';
import {Checkbox} from 'muicss/react';

class TaskItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: props.task   // task is props.task or their values are equal, not the left is equal the left (this is the confusion)
    }
  }

  onChange(task, e){
    this.props.onEditState(task, e.target.checked);
  }

  render() {
    return (
      <div className="mui--divider-bottom">
        <Checkbox className={(this.state.task.completed) ? "completed" : ""} onChange={this.onChange.bind(this, this.state.task)} name={this.state.task._id.$oid} label={this.state.task.text} defaultChecked={this.state.task.completed} />
      </div>
    );
  }
}

export default TaskItem;
