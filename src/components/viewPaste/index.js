import React, { Component } from 'react';
import pasteService from "../../services/pastes";
import "./pasteView.css";

class ViewPaste extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        (async () => {
            const paste = await pasteService.get(id);
            this.setState(paste);
        })();
    }

    render() {
        return (
            <div className="paste-view">
                <div className="paste-id">
                    Paste ID: { this.state.id }
                </div>
                <textarea readonly="true" value={this.state.content} className="paste-box">
                    
                </textarea>
            </div>
        );
    }
}

export default ViewPaste;
