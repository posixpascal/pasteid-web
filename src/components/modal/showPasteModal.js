import React, { Component } from 'react';

import "./modal.css";
import pasteStore from '../../stores/pasteStore';
import resetPaste from '../../actions/resetPaste';

class ShowPasteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pasteViewUrl: ""
        }
    }

    componentDidMount() {
        const { paste } = this.props;
        this.setState({
            pasteViewUrl: `https://paste.id/${paste.id}#${paste.password}`
        });
    }

    createPaste(){
        pasteStore.dispatch(resetPaste());
    }

    render() {
        return (
            <div className="modal">
                <div className="modal-inner uk-box-shadow-large">
                    <div className="modal-title">Paste created</div>
                    <div className="modal-body">
                        <p>
                            Copy the link below to view your paste
                        </p>

                        <textarea rows="4" className="uk-textarea" value={this.state.pasteViewUrl}></textarea>
                        <button onClick={() => this.createPaste() } className="uk-button uk-button-primary">
                            Create another
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowPasteModal;
