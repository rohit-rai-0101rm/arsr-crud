import React,{useState} from "react";
import "./Modal.css";

function Modal({ setOpenModal,setConfirmDelete }) {
  return (
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h3>Are You Sure You Want to Delete?</h3>
        </div>
        
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button  onClick={() => {
              setOpenModal(false);
              setConfirmDelete(true)
              
            }}>DELETE</button>
        </div>
      </div>
  );
}
export default Modal;
