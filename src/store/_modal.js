const INIT_STATE = {
    open: false
}

export const modal = (state = INIT_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case `MODAL`:
            return { ...state, modal: { opened: payload } }
        default:
            return state
    }
}