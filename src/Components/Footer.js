import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Zname: props.Zname,  //Test Demo or Zname's value in <Footer /> 
            Sname: 'From the <Footer/>',
            Yname: 'Testing the bind parameter'
        }
    }

    onTest(sname, yname, e) {  // pass param e to onClick
        // someFunc's params are given by this onClick
        this.props.onClick(this.state.Zname, this.props.Xname, e.target.name, sname, yname);  // given to w/e function is <Footer />
        // if sname is itself it must be binded as this.state.Sname
    }

    render() {
        return (
            <div className="mui--divider-bottom">
                {/* this onClick pass the onClink in onText to onClick in <Footer/> */}
                <button onClick={this.onTest.bind(this, this.state.Sname, this.state.Yname)} name="Click IT" className="btn-default">
                    Click IT
                </button>

                <textarea>

                    </textarea>
            </div>
        );
    }
}

export default Footer;