import React from 'react'


import { useToast } from '../context/ToastContext';

const Toast = () => {
    const { toast } = useToast();
    // const visible = toast.visible;
    // const message = toast.message;
    const { visible, message } = toast;


    return (
        <div className={`toast ${visible ? 'visible' : 'hidden'}`}>
            {message}
        </div>
    )
}

export default Toast


