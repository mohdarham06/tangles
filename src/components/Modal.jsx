import React from 'react'


const Modal = ({ children ,modifier = '' }) => {

    return (
        <div className={`modal ${modifier}`}>

            {children}
            
        </div>
    )
}

export default Modal