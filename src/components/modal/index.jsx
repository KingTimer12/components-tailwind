import { useModal } from "./../../hooks"
import { useSelector } from 'react-redux'
import {RemoveScroll} from 'react-remove-scroll'


function Modal({ children }) {
    return (
        <section>
            {children}
        </section>
    )
}

function ModalPanel({ removeScroll, children, ...props }) {
    const { modal } = useSelector(s => s.modal)
    const { close } = useModal()
    const handleModal = () => {
        close()
    }

    return (
        <>
            {modal?.opened && (
                <section className="flex justify-center items-center">
                    <RemoveScroll enabled={removeScroll}>
                        <div className="fixed inset-0 bg-zinc-700 opacity-40" onClick={handleModal} />
                    </RemoveScroll>
                    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <div {...props}>
                            {children}
                        </div>
                    </div>
                </section>)
            }
        </>
    )
}

function ModalTrigger({ onOpen, children, ...props }) {
    const { open } = useModal()
    const handleModal = (e) => {
        onOpen && onOpen(e)
        open()
    }
    
    return (
        <button {...props} onClick={handleModal}>
            {children}
        </button>
    )
}

function ModalClose({ children, ...props }) {
    const { close } = useModal()
    const handleModal = () => {
        close()
    }

    return (
        <button {...props} onClick={handleModal}>
            {children}
        </button>
    )
}

function ModalContent({ children, ...props }) {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

function ModalSubmit({ disabled, closeOnClick = false, children, ...props }) {
    const { close } = useModal()
    const handleModal = () => {
        if (closeOnClick) close()
    }

    return (
        <button disabled={disabled} data-disabled={disabled} {...props} onClick={handleModal} type="submit">
            {children}
        </button>
    )
}

Modal.Content = ModalContent
Modal.Close = ModalClose
Modal.Cancel = ModalClose
Modal.Submit = ModalSubmit
Modal.Panel = ModalPanel
Modal.Trigger = ModalTrigger
export default Modal