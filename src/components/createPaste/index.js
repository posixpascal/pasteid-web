import React, { Component } from 'react';

import { SUCCESS, RESET } from "../../constants";
import Modal from "../modal";
import ShowPasteModal from "../modal/showPasteModal"
import "./createPaste.css";

import pasteStore from "../../stores/pasteStore";
import createPaste from '../../actions/createPaste';

class CreatePaste extends Component {
    constructor(props) {
        super(props);
        this.pasteArea = React.createRef();
        this.state = {
            isLoading: false,
            paste: false
        }
    }

    componentDidMount() {
        pasteStore.subscribe(() => {
            const paste = pasteStore.getState();
            if (paste.status === SUCCESS) {
                this.setState({
                    isLoading: false,
                    paste
                });
            } else if (paste.status === RESET) {
                this.setState({
                    isLoading: false,
                    paste: null
                });

                this.pasteArea.current.value = "";
            }
        });
    }

    submitPaste() {
        this.setState({
            isLoading: true
        });

       
        const paste = {
            content: this.pasteArea.current.value
        }

        pasteStore.dispatch(createPaste(paste));
    }

    render() {
        return (
            <div>
                <textarea
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    className="paste-box"
                    ref={this.pasteArea}
                    placeholder="Paste your content..."></textarea>

                <nav className="uk-navbar-container" data-uk-navbar>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li className="uk-text-bold uk-active">
                                <a
                                    onClick={(ev) => { this.submitPaste(); ev.preventDefault(); return false; }}>
                                    Submit
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {this.state.isLoading ? <Modal title="Please wait" loading="true" /> : null}
                {this.state.paste ? <ShowPasteModal paste={this.state.paste} /> : null}
            </div>
        );
    }
}

export default CreatePaste;
