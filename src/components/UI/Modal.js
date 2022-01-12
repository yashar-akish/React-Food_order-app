import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
  return <div  className={classes.backdrop} onClick={props.onCloseBackdrop}/>
}

const ModalOverlay = props => {
  return(
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

// adding new div by id of 'overlays' in index.html 
const portalElement = document.getElementById('overlays');

const Modal = (props) => {

  return(
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseBackdrop={props.onCloseHandle}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal;