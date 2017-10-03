import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Zname: props.Zname
        }
    }

    onTest(e) {
        this.props.onClick(e.target.Zame);
    }

    render() {
        return (
            <div className="mui--divider-bottom">
                <h1>
                    {this.onTest.bind(this)}
                    Click this
                </h1>
            </div>
        );
    }
}

export default Footer;