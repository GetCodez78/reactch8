import React, { Component } from 'react';
import { Checkbox } from 'muicss/react';

class TaskItem extends Component {
    constructor(props) {
super(props);
this.state = {
    task: props.task
}

    }
    render() {

        return (
            <div className="mui--divider-bottom">
                <Checkbox className={(this.state.task.completed) ? "completed" : ""} name={this.state.task._id.$oid} label={this.state.task.text} defaultChecked={this.state.task.completed}/>
                  
            </div>
        );
    }
}

export default TaskItem;