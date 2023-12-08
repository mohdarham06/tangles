import React from 'react'

import PostEditor from './PostEditor'
import Modal from './Modal'
import { OutlineClose } from '../assets/CustomIcons'


const ModalPostEditor = ({ closePostModal }) => {
    return (
        <Modal>

            <div className="modal__post-editor">
                <div
                    className="modal__post-editor__header"
                    onClick={closePostModal}
                >
                    <div className="modal__post-editor__header__btn">
                        <OutlineClose />
                        {/* <OutlineBack /> */}
                    </div>
                </div>

                <PostEditor />
            </div>

        </Modal>
    )
}

export default ModalPostEditor