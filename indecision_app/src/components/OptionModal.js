import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => (
 <Modal
   isOpen={!!props.selectedOption}
   contentLabel="Indecision app says: "
   onRequestClose={props.handleSelectedOption}
   closeTimeoutMS={200}
   className="modal"
 >
   <h4 className="modal__title">Selected option</h4>
   {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
   <button className="button" onClick={props.handleSelectedOption}>Close</button>
 </Modal>
);

export default OptionModal;