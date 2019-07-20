import React from 'react';
import './Modal.scss';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ modalDisplay, setModalDisplay }) => {
    return (
        <div className={modalDisplay ? 'modal' : 'modal hidden'}>
            <FaTimes 
                style={{color: 'white'}}
                onClick={() => setModalDisplay(false)}
             />
            <div>
                <img src='' width='100%' height='100%' alt='' />
                <div className="details">
                    <p className="photographer">Blake Ibeks</p>
                    <p className="location">Lagos, Nigeria</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;