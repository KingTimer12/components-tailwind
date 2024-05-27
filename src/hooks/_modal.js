import { useDispatch } from 'react-redux'

export const useModal = () => {
    const dispatch = useDispatch()

    function open() {
        dispatch({ type: "MODAL", payload: true })
    }

    function close() {
        dispatch({ type: "MODAL", payload: false })
    }

    return { open, close }
}