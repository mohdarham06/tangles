import React from 'react'


import PostEditor from './PostEditor'
import { OutlineClose } from '../assets/CustomIcons'


const PostEditorModal = ({ closePostModal }) => {
    return (
        <div className="post-editor-modal-wrapper">

            <div className="post-editor-modal">
                <div
                    className="post-editor-modal__header"
                    onClick={closePostModal}
                >
                    <div className="post-editor-modal__header__btn">
                        <OutlineClose />
                        {/* <OutlineBack /> */}
                    </div>
                </div>

                <PostEditor />
            </div>
        </div>
    )
}

export default PostEditorModal