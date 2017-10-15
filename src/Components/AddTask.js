import React, { Component } from 'react';
import { Form, Input } from 'muicss/react';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    }
  }

  onSubmit(e) {
    this.props.onAddTask(this.state.task);    // pass param to addTask(text) in App.js
    e.target.reset();
    e.preventDefault();
  }

  onChange(e) {
    this.setState({ task: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>  {/* 2. get task from onAddTask*/}
        <Input hint="Add Task" onChange={this.onChange.bind(this)} />  {/* 1. set task */}
      </Form>
    );
  }
}

export default AddTask;
