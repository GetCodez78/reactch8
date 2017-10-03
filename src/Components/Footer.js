import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Zname: props.Zname  //Test Demo or Zname's value in <Footer /> 
        }
    }

    onTest() {
        this.props.onClick(this.state.Zname);  // given to w/e function on <Footer /> 
    }

    render() {
        return (
            <div className="mui--divider-bottom">
                <button onClick={this.onTest.bind(this)}>
                    Click this
                </button>
            </div>
        );
    }
}

export default Footer;