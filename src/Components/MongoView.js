import React, { Component } from 'react';

class MongoView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: props.task   // task is props.task or their values are equal, not the left is equal the left (this is the confusion)
        }
    }

    onChange(task, e) {
        this.props.onEditState(task, e.target.checked);  // give arguments to <Mongo />, and task is equal props.task 
    }

    render() {
        return (
            <div className="mui--divider-bottom">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label className="bold" onChange={this.onChange.bind(this, this.state.task)}
                                    name={this.state.task._id.$oid}>
                                    {this.state.task.text}
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MongoView;
