import React, { Component } from 'react';
import { Panel } from 'muicss/react';
import TaskItem from './TaskItem';

class Tasks extends Component {

    render() {

        let TaskItems;
        if (this.props.tasks) {
            TaskItems = this.props.tasks.map(task => {
                return (
                    <TaskItem key={task._id.$oid} task={task} />
                );
            })
        }

        return (
            <Panel>
                {TaskItems}
            </Panel>
        );
    }
}

export default Tasks;
