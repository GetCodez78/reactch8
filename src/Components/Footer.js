import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Zname: props.Zname  //Test Demo or Zname's value in <Footer /> 
        }
    }

    onTest(e) {  // pass param e to onClick
        // someFunc's params are given by this onClick
        this.props.onClick(this.state.Zname, this.props.Xname, e.target.name);  // given to w/e function is <Footer />
    }

    render() {
        return (
            <div className="mui--divider-bottom">
                <button onClick={this.onTest.bind(this)} name="Click IT" className="btn-default">
                    Click IT
                </button>

                <textarea>

                    </textarea>
            </div>
        );
    }
}

export default Footer;