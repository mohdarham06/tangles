import React, {
    createContext, useContext,
    useState
} from 'react'

const ToastContext = createContext();


export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ visible: false, message: '' });

    const showToast = (message) => {
        setToast({ visible: true, message });

        setTimeout(() => {
            setToast((prevToast) => ({ ...prevToast, visible: false }));
        }, 3000); // Adjust the duration as needed
    };


    return (
        <ToastContext.Provider value={{ toast, showToast }}>
            {children}
        </ToastContext.Provider>
    )
}


export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};



