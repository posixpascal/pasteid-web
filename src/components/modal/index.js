import React, { Component } from 'react';
import "./modal.css";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="modal">
                <div className="modal-inner uk-box-shadow-large">
                    <div className="modal-title">{ this.props.title }</div>
                    <div className="modal-body">
                        {this.props.loading ? <div uk-spinner="ratio :2"></div> : this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
