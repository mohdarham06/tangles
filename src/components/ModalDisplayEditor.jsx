import React from 'react'

import Modal from './Modal'
import { useTheme } from '../context/ThemeContext'
import { OutlineTick } from '../assets/CustomIcons'


// closeDisplayModal from AppLayout
const ModalDisplayEditor = ({ closeDisplayModal }) => {
    const { theme, accentColor, changeTheme, changeAccentColor } = useTheme();

    const accentColorOptions = [
        { color: "purple", isSelected: accentColor === "purple" },
        { color: "yellow", isSelected: accentColor === "yellow" },
        { color: "pink", isSelected: accentColor === "pink" },
        { color: "blue", isSelected: accentColor === "blue" },
        { color: "orange", isSelected: accentColor === "orange" },
        { color: "green", isSelected: accentColor === "green" }
    ]

    const themeOptions = [
        { color: "light", isSelected: theme === "light" },
        { color: "dark", isSelected: theme === "dark" }
    ]

    return (
        <Modal>
            <div className="modal__display-editor">
                <h2 className="display-editor__heading">Customize your view</h2>

                <div className="display-editor__panel-label">Color</div>
                <div className="display-editor__panel">
                    <div className="panel__accent-selector">
                        {accentColorOptions.map((option) => (
                            <div
                                key={option.color}
                                className={
                                    `panel__accent-option ${option.color} ${option.isSelected ? 'selected' : ''}`
                                }
                                onClick={() => changeAccentColor(option.color)}
                            >
                                {option.isSelected ? <OutlineTick /> : null}
                            </div>
                        ))}
                    </div>
                </div>



                <div className="display-editor__panel-label">Theme</div>
                <div className="display-editor__panel">

                    <div className="panel__theme-selector">
                        {themeOptions.map((option) => (
                            <div
                                key={option.color}
                                className={
                                    `modal__theme-selector__btn ${option.color} ${option.isSelected ? 'selected' : ''}`
                                }
                                onClick={() => changeTheme(option.color)}
                            >
                                <div
                                    role="radio" aria-checked={option.isSelected}
                                    className={`theme-selector__btn__state ${option.isSelected ? 'selected' : ''}`}
                                >
                                    {option.isSelected ? <OutlineTick /> : null}
                                </div>
                                <span className="theme-selector__btn__text">{option.color}</span>
                            </div>
                        ))}
                    </div>

                </div>


                <div className="display-editor__footer">
                    <div className="primary-button" onClick={closeDisplayModal}>Done</div>
                </div>

            </div>
        </Modal>
    )
}

export default ModalDisplayEditor