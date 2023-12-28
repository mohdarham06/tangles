import React from 'react'

import PostEditor from './PostEditor'
import Modal from './Modal'
import { OutlineClose } from '../assets/CustomIcons'

// closePostModal from AppLayout
const ModalPostEditor = ({ closePostModal }) => {
    return (
        <Modal>

            <div className="modal__post-editor">
                <div
                    className="modal__post-editor__header"
                    onClick={closePostModal}
                >
                    <div className="modal__close-btn">
                        <OutlineClose />
                    </div>
                </div>

                <PostEditor />
            </div>

        </Modal>
    )
}

export default ModalPostEditor