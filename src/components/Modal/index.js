import React from 'react';
import './Modal.scss';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ modalDisplay, setModalDisplay }) => {
    return (
        <div className={modalDisplay ? 'modal' : 'modal hidden'}>
            <FaTimes 
                style={{color: 'white'}}
                onClick={() => setModalDisplay(null)}
             />
            <div>
                <img src={modalDisplay && modalDisplay.urls.full} alt={modalDisplay && modalDisplay.user.name} />
                <div className="details">
                    <p className="photographer">{modalDisplay && modalDisplay.user.name}</p>
                    <p className="location">{modalDisplay && modalDisplay.user.location}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;