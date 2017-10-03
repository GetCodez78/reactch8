import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Zname: props.Zname
        }
    }

    onTest(e) {
        this.props.onClick(e.target.value);
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