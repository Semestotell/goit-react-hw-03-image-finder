import React from "react";
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, Content } from "./Modal.styled"

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
        onClose: PropTypes.func,
        children: PropTypes.node.isRequired,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
        this.props.onClose();
        }
    };

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
        this.props.onClose();
        }
    };

    render() {
        return createPortal(
        <Overlay onClick={this.handleBackdropClick}>
            <Content>{this.props.children}</Content>
        </Overlay>,
        modalRoot
        );
    }
}