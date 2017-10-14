import React, { Component } from 'react';

class MongoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task   // task is props.task or their values are equal, not the left is equal the left (this is the confusion)
    }
  }

  onChange(task, e) {
    this.props.onEditState(task, e.target.checked);  // give arguments to <TaskItem /> ? 
  }

  render() {
    return (
      <div className="mui--divider-bottom">
          <table>
              <tr>
                  <td>
        <label className="bold"
          onChange={this.onChange.bind(this, this.state.task)} name={this.state.task._id.$oid}
          label={this.state.task.text} defaultChecked={this.state.task.completed}>
            {this.state.task.text}
          </label>
                </td>
                </tr>
          </table>
      </div>
    );
  }
}

export default MongoView;
